import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { animate } from "animejs";
import { useLang } from "../context/LangContext";

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent]   = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const contactInfo = [
    { icon: <FaEnvelope />, label: t.contact.emailLabel,    value: "akinbas2002@gmail.com",  href: "mailto:akinbas2002@gmail.com"         },
    { icon: <FaLinkedin />, label: t.contact.linkedinLabel, value: "linkedin.com/in/akinbas", href: "https://www.linkedin.com/in/akinbas/" },
    { icon: <FaGithub />,   label: t.contact.githubLabel,   value: "github.com/akinbs",        href: "https://github.com/akinbs"            },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    if (btnRef.current) {
      animate(btnRef.current, {
        scale: [1, 0.96, 1],
        duration: 300,
        easing: "easeInOutSine",
      } as any);
    }

    try {
      const res = await fetch("https://formsubmit.co/ajax/akinbas2002@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: t.contact.formSubject,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 px-6 bg-black">
      <div className="max-w-[1078px] mx-auto">

        <motion.div
          className="flex items-baseline gap-5 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">06</span>
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-2">{t.contact.heading}</h2>
            <p className="text-white/38 font-light text-sm">{t.contact.subheading}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Contact info */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-5"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 }}
              >
                <div className="w-10 h-10 rounded-full border border-white/12 flex items-center justify-center text-white/45 group-hover:border-white/30 group-hover:text-white/80 transition-all flex-shrink-0 text-sm">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[11px] text-white/28 font-light mb-0.5 uppercase tracking-[0.15em]">{item.label}</p>
                  <p className="text-sm font-light text-white/65 group-hover:text-white/90 transition-colors">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

            <div className="mt-4 pt-6 border-t border-white/6">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-light text-white/70">{t.contact.available}</span>
              </div>
              <p className="text-xs text-white/32 font-light leading-relaxed">
                {t.contact.availableDesc}
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {sent ? (
              <motion.div
                className="flex flex-col items-center justify-center h-64 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
              >
                <div className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-white mb-2">{t.contact.sentTitle}</h3>
                <p className="text-sm text-white/40 font-light mb-8">{t.contact.sentDesc}</p>
                <button onClick={() => setSent(false)} className="btn-ghost py-2.5 px-7 text-sm">
                  {t.contact.newMessage}
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-8"
              >

                <div>
                  <label htmlFor="name" className="block text-[11px] font-light text-white/32 uppercase tracking-[0.2em] mb-3">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    required
                    className="input-mono"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[11px] font-light text-white/32 uppercase tracking-[0.2em] mb-3">
                    {t.contact.emailFieldLabel}
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    required
                    className="input-mono"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] font-light text-white/32 uppercase tracking-[0.2em] mb-3">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t.contact.msgPlaceholder}
                    required
                    rows={5}
                    className="input-mono"
                  />
                </div>

                {error && (
                  <p className="text-red-400/80 text-xs font-light text-center -mt-2">
                    {t.contact.errorMsg ?? "Mesaj gönderilemedi. Lütfen tekrar deneyin."}
                  </p>
                )}

                <button
                  ref={btnRef}
                  type="submit"
                  disabled={loading}
                  className="relative w-full py-4 text-sm font-light tracking-[0.14em] overflow-hidden group rounded-xl transition-all duration-300 hover:scale-[1.015] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{
                    background: 'rgba(160, 224, 171, 0.06)',
                    border: '1px solid rgba(160, 224, 171, 0.28)',
                    color: 'rgba(160, 224, 171, 0.88)',
                    backdropFilter: 'blur(16px)',
                    boxShadow: '0 0 28px rgba(160, 224, 171, 0.1), inset 0 1px 0 rgba(255,255,255,0.06)',
                  }}
                >
                  <span className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, rgba(160,224,171,0.45), transparent)' }} />
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'linear-gradient(110deg, transparent 35%, rgba(160,224,171,0.07) 50%, transparent 65%)' }}
                  />
                  <span className="relative flex items-center justify-center gap-2.5">
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        {t.contact.sending ?? "Gönderiliyor..."}
                      </>
                    ) : (
                      <>
                        {t.contact.send}
                        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
