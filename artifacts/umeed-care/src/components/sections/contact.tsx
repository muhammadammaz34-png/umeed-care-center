import { useState } from "react";
import { Send, CheckCircle, Mail, MapPin, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const WHATSAPP_BASE = "https://wa.me/923136422564";

// Canonical (English) service names — always sent to WhatsApp regardless of
// the UI language, so the team's messages stay consistent to read.
const SERVICES_EN = translations.en.contactSection.services;

interface FormState {
  name: string;
  phone: string;
  service: string;
  message: string;
}

export default function Contact() {
  const { language, t } = useLanguage();
  const [form, setForm] = useState<FormState>({ name: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = t.contactSection.errorName;
    if (!form.phone.trim()) e.phone = t.contactSection.errorPhone;
    if (!form.service) e.service = t.contactSection.errorService;
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const text = [
      `Hello, I would like to book a consultation at Umeed Care Center.`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Service Needed:* ${form.service}`,
      form.message ? `*Message:* ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28 bg-dark text-dark-foreground">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -right-24 h-[26rem] w-[26rem] rounded-full bg-accent/25 blur-3xl" />
      <div className="container px-4 sm:px-6 mx-auto relative z-10 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
        {/* Left: intro and direct contact */}
        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">{t.contactSection.badge}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
            {t.contactSection.title}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-md">
            {t.contactSection.description}
          </p>

          <ul className="mt-10 space-y-4 text-white/80">
            <li>
              <a href={WHATSAPP_BASE} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 hover:border-primary/60 transition-colors">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary"><MessageCircle className="w-5 h-5" /></span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-white/50">WhatsApp</span>
                  <span className="block font-semibold text-white">0313 6422564</span>
                </span>
              </a>
            </li>
            <li>
              <a href="mailto:shahsahab022@gmail.com" className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 hover:border-accent/70 transition-colors">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-white"><Mail className="w-5 h-5" /></span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-widest text-white/50">Email</span>
                  <span className="block font-semibold text-white break-all">shahsahab022@gmail.com</span>
                </span>
              </a>
            </li>
            <li className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"><MapPin className="w-5 h-5" /></span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-white/50">{language === "ur" ? "مقام" : "Location"}</span>
                <span className="block font-semibold text-white">{language === "ur" ? "کراچی، سندھ، پاکستان" : "Karachi, Sindh, Pakistan"}</span>
              </span>
            </li>
          </ul>
        </div>

        {/* Right: form card */}
        <div className="reveal rounded-3xl bg-card text-card-foreground shadow-2xl shadow-black/30 overflow-hidden">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center p-12 gap-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{t.contactSection.successTitle}</h3>
              <p className="text-muted-foreground text-sm max-w-xs">{t.contactSection.successText}</p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", service: "", message: "" }); }}
                className="mt-2 text-sm text-primary underline hover:no-underline"
              >
                {t.contactSection.submitAnother}
              </button>
            </div>
          ) : (
            <div className="p-6 sm:p-9">
              <h3 className="text-xl sm:text-2xl font-bold mb-1">{t.contactSection.formTitle}</h3>
              <p className="text-muted-foreground text-sm mb-7">{t.contactSection.formSubtitle}</p>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label={t.contactSection.labelName} error={errors.name}>
                    <input type="text" placeholder={t.contactSection.placeholderName} value={form.name} onChange={(e) => handleChange("name", e.target.value)} className={fieldClass(!!errors.name)} />
                  </Field>
                  <Field label={t.contactSection.labelPhone} error={errors.phone}>
                    <input type="tel" placeholder={t.contactSection.placeholderPhone} value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} className={fieldClass(!!errors.phone)} />
                  </Field>
                </div>

                <Field label={t.contactSection.labelService} error={errors.service}>
                  <select value={form.service} onChange={(e) => handleChange("service", e.target.value)} className={fieldClass(!!errors.service)}>
                    <option value="">{t.contactSection.placeholderService}</option>
                    {SERVICES_EN.map((s, i) => (
                      <option key={s} value={s}>{t.contactSection.services[i]}</option>
                    ))}
                  </select>
                </Field>

                <Field label={t.contactSection.labelMessage}>
                  <textarea rows={4} placeholder={t.contactSection.placeholderMessage} value={form.message} onChange={(e) => handleChange("message", e.target.value)} className={`${fieldClass(false)} resize-none`} />
                </Field>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full h-12 px-8 text-sm font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 active:scale-[0.98] transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                  {t.contactSection.submitButton}
                </button>

                <p className="text-xs text-center text-muted-foreground">{t.contactSection.disclaimer}</p>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">{label}</label>
      {children}
      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
    </div>
  );
}

function fieldClass(hasError: boolean) {
  return `w-full rounded-xl border ${hasError ? "border-red-400 bg-red-50/50" : "border-border bg-secondary/30"} px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200`;
}
