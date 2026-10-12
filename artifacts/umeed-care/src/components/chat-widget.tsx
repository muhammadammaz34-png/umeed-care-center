import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { MessageCircle, Send, X, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { destPath, greeting, respond, type BotReply, type ChatLink, type Chip } from "@/lib/chat-engine";

interface Msg {
  id: number;
  from: "bot" | "user";
  text: string;
  links?: ChatLink[];
  chips?: Chip[];
}

let uid = 0;

export default function ChatWidget() {
  const { language } = useLanguage();
  const [location, setLocation] = useLocation();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const lastTopic = useRef<string | undefined>(undefined);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isUr = language === "ur";

  useEffect(() => setMounted(true), []);

  // Seed the greeting the first time the panel opens.
  useEffect(() => {
    if (open && msgs.length === 0) {
      const g = greeting(language);
      setMsgs([{ id: ++uid, from: "bot", text: g.text, chips: g.chips }]);
    }
  }, [open, msgs.length, language]);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [msgs, typing]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function push(reply: BotReply) {
    setMsgs((m) => [...m, { id: ++uid, from: "bot", text: reply.text, links: reply.links, chips: reply.chips }]);
  }

  function send(raw: string, label?: string) {
    const value = raw.trim();
    if (!value || typing) return;
    // Old chips stay readable but no longer clickable once answered.
    setMsgs((m) => [...m.map((x) => ({ ...x, chips: undefined })), { id: ++uid, from: "user", text: label ?? value }]);
    setInput("");
    setTyping(true);
    const { reply, topicId } = respond(value, language, lastTopic.current);
    lastTopic.current = topicId ?? lastTopic.current;
    window.setTimeout(() => {
      setTyping(false);
      push(reply);
    }, 450);
  }

  function go(link: ChatLink) {
    const path = destPath(link.dest);
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    if (isMobile) setOpen(false);

    if (link.dest.kind === "gallery") {
      const scroll = () => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth", block: "start" });
      if (location === "/") scroll();
      else {
        setLocation("/");
        window.setTimeout(scroll, 450);
      }
      return;
    }
    setLocation(path);
  }

  if (!mounted) return null;

  const t = isUr
    ? {
        title: "امید گائیڈ",
        sub: "صحیح سروس تک رہنمائی",
        ph: "اپنا مسئلہ لکھیں",
        send: "بھیجیں",
        open: "گائیڈ سے بات کریں",
        close: "بند کریں",
        note: "یہ عمومی رہنمائی ہے، طبی مشورہ نہیں۔",
      }
    : {
        title: "Umeed Guide",
        sub: "Find the right service",
        ph: "Describe the problem",
        send: "Send",
        open: "Chat with the guide",
        close: "Close chat",
        note: "General guidance only, not medical advice.",
      };

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label={t.title}
          className="fixed z-[60] inset-x-3 bottom-3 top-16 sm:inset-x-auto sm:top-auto sm:bottom-24 sm:end-5 sm:w-[24rem] sm:h-[34rem] sm:max-h-[calc(100vh-8rem)] flex flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-2xl"
          dir={isUr ? "rtl" : "ltr"}
        >
          <div className="relative flex items-center gap-3 bg-dark px-5 py-4 text-dark-foreground">
            <div aria-hidden="true" className="pointer-events-none absolute -top-10 -end-10 h-32 w-32 rounded-full bg-primary/30 blur-2xl" />
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="relative min-w-0 flex-1">
              <p className="text-sm font-semibold leading-tight">{t.title}</p>
              <p className="mt-0.5 text-xs text-white/60">{t.sub}</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label={t.close}
              className="relative flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto bg-secondary/40 px-4 py-4" aria-live="polite">
            {msgs.map((m) => (
              <div key={m.id} className={`flex flex-col gap-2 ${m.from === "user" ? "items-end" : "items-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.from === "user"
                      ? "bg-primary text-primary-foreground rounded-ee-md"
                      : "bg-background text-foreground border border-border rounded-es-md"
                  }`}
                >
                  {m.text}
                </div>

                {m.links && (
                  <div className="flex w-full max-w-[90%] flex-col gap-2">
                    {m.links.map((l) => (
                      <button
                        key={l.label}
                        onClick={() => go(l)}
                        className="group flex items-start justify-between gap-3 rounded-2xl border border-primary/30 bg-background px-4 py-3 text-start transition-colors hover:border-primary hover:bg-primary/5"
                      >
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-foreground">{l.label}</span>
                          {l.hint && <span className="mt-1 line-clamp-2 block text-xs leading-snug text-muted-foreground">{l.hint}</span>}
                        </span>
                        <ArrowUpRight
                          className={`mt-0.5 h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isUr ? "-scale-x-100" : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {m.chips && (
                  <div className="flex flex-wrap gap-2">
                    {m.chips.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => send(c.id, c.label)}
                        className="rounded-full border border-primary/40 bg-background px-3.5 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {typing && (
              <div className="flex items-start">
                <div className="flex gap-1 rounded-2xl rounded-es-md border border-border bg-background px-4 py-3" aria-hidden="true">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/60" style={{ animationDelay: `${i * 120}ms` }} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
              inputRef.current?.focus();
            }}
            className="border-t border-border bg-background px-3 pb-2 pt-3"
          >
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.ph}
                enterKeyHint="send"
                className="h-11 min-w-0 flex-1 rounded-full border border-border bg-secondary/50 px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
              <button
                type="submit"
                aria-label={t.send}
                disabled={!input.trim() || typing}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-40"
              >
                <Send className={`h-4 w-4 ${isUr ? "-scale-x-100" : ""}`} />
              </button>
            </div>
            <p className="mt-2 text-center text-[11px] text-muted-foreground">{t.note}</p>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? t.close : t.open}
        aria-expanded={open}
        className={`fixed bottom-5 end-5 z-[60] flex h-14 items-center gap-2 rounded-full bg-primary pe-5 ps-4 text-primary-foreground shadow-xl transition-all hover:bg-primary/90 active:scale-95 ${
          open ? "max-sm:hidden" : ""
        }`}
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" aria-hidden="true" />}
        <span className="hidden text-sm font-semibold sm:inline">{open ? t.close : t.open}</span>
      </button>
    </>
  );
}
