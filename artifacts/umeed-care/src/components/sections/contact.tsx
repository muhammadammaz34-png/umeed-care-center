import { useState } from "react";
import { MapPin, Phone, Mail, Facebook, MessageCircle, Send, CheckCircle } from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/923136422564";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100054410172615";

const SERVICES = [
  "Lower Limb Prosthetics",
  "Upper Limb Prosthetics",
  "Pediatric Orthotics & Prosthetics",
  "Spinal Orthotics",
  "Lower Limb Orthotics",
  "Upper Limb Orthotics",
  "Custom Foot Orthotics",
  "Diabetic & Pressure-Relief Footwear",
  "General Inquiry",
];

interface FormState {
  name: string;
  phone: string;
  service: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.phone.trim()) e.phone = "Please enter your phone number";
    if (!form.service) e.service = "Please select a service";
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

    const url = `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
      />
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs sm:text-sm font-medium text-white/90 mb-4">
            Free Consultation
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
            Book a Consultation
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto text-sm sm:text-base md:text-lg">
            Fill in the form — we'll open WhatsApp with your details pre-filled so you can send it instantly.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-card text-card-foreground rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row scroll-animate opacity-0 transition-all duration-1000 translate-y-8">

          {/* ── Left: Contact details ── */}
          <div className="p-6 sm:p-8 md:p-10 lg:w-2/5 flex flex-col justify-between bg-background border-b lg:border-b-0 lg:border-r border-border/40">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif mb-2">Get in Touch</h3>
              <p className="text-muted-foreground mb-7 text-sm md:text-base">
                Our certified prosthetists and orthotists in Karachi are ready to help you regain independence.
              </p>

              <div className="space-y-5">
                <ContactRow icon={<MapPin className="w-4 h-4 text-primary" />} label="Location">
                  <p className="font-medium text-sm">Karachi, Sindh, Pakistan</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Serving patients across Karachi</p>
                </ContactRow>

                <ContactRow icon={<Phone className="w-4 h-4 text-primary" />} label="Call / WhatsApp">
                  <a
                    href={`${WHATSAPP_BASE}?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Umeed%20Care%20Center.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-sm text-primary hover:underline flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    0313 6422564
                  </a>
                  <p className="text-xs text-muted-foreground mt-0.5">Tap to open WhatsApp</p>
                </ContactRow>

                <ContactRow icon={<Mail className="w-4 h-4 text-primary" />} label="Email">
                  <a href="mailto:shahsahab022@gmail.com" className="font-medium text-sm hover:text-primary transition-colors break-all">
                    shahsahab022@gmail.com
                  </a>
                </ContactRow>

                <ContactRow icon={<Facebook className="w-4 h-4 text-primary" />} label="Facebook">
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-sm hover:text-primary transition-colors">
                    Umeed Care Center
                  </a>
                  <p className="text-xs text-muted-foreground mt-0.5">Follow us for updates</p>
                </ContactRow>
              </div>
            </div>

            {/* WhatsApp quick-tap */}
            <a
              href={`${WHATSAPP_BASE}?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Umeed%20Care%20Center.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full h-11 px-6 text-sm font-semibold shadow-md border-2 border-green-600 bg-green-600 text-white hover:bg-white hover:text-green-600 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us Directly
            </a>
          </div>

          {/* ── Right: Consultation form ── */}
          <div className="p-6 sm:p-8 md:p-10 lg:w-3/5">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-2">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">WhatsApp Opened!</h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Your consultation details have been pre-filled in WhatsApp. Just hit send and we'll get back to you shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", service: "", message: "" }); }}
                  className="mt-4 text-sm text-primary underline hover:no-underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif mb-1">Consultation Request</h3>
                  <p className="text-muted-foreground text-sm">We'll pre-fill your WhatsApp message — no typing needed.</p>
                </div>

                {/* Name + Phone row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Full Name *" error={errors.name}>
                    <input
                      type="text"
                      placeholder="e.g. Ahmed Khan"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={fieldClass(!!errors.name)}
                    />
                  </Field>
                  <Field label="Phone Number *" error={errors.phone}>
                    <input
                      type="tel"
                      placeholder="e.g. 0313 6422564"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className={fieldClass(!!errors.phone)}
                    />
                  </Field>
                </div>

                {/* Service dropdown */}
                <Field label="Service Needed *" error={errors.service}>
                  <select
                    value={form.service}
                    onChange={(e) => handleChange("service", e.target.value)}
                    className={fieldClass(!!errors.service)}
                  >
                    <option value="">Select a service…</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Field>

                {/* Message */}
                <Field label="Additional Details (optional)">
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your condition, symptoms, or any questions you have…"
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={`${fieldClass(false)} resize-none`}
                  />
                </Field>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full h-12 px-8 text-sm font-semibold shadow-md border-2 border-green-600 bg-green-600 text-white hover:bg-green-700 active:scale-95 transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                  Send via WhatsApp
                </button>

                <p className="text-xs text-center text-muted-foreground">
                  Clicking the button opens WhatsApp with your details pre-filled. No data is stored on this site.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">{label}</p>
        {children}
      </div>
    </div>
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
