import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../context/LangContext";
import type { Lang } from "../i18n/translations";

function LangToggle() {
  const { lang, setLang } = useLang();
  const isEN = lang === "en";

  return (
    <button
      onClick={() => setLang(isEN ? "tr" : "en")}
      aria-label="Switch language"
      className="relative flex items-center rounded-full overflow-hidden text-[11px] font-light h-7 select-none cursor-pointer flex-shrink-0"
      style={{
        width: 60,
        background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 100%)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(255,255,255,0.05), 0 4px 20px rgba(0,0,0,0.18), 0 1px 4px rgba(0,0,0,0.12)",
      }}
    >
      <motion.span
        className="absolute top-[3px] bottom-[3px] w-[26px] rounded-full"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.1) 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 6px rgba(0,0,0,0.15)",
        }}
        animate={{ left: isEN ? 31 : 3 }}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
      />
      {(["tr", "en"] as Lang[]).map(l => (
        <span
          key={l}
          className={`relative z-10 w-[30px] text-center transition-colors duration-200 ${lang === l ? "text-white" : "text-white/35"}`}
        >
          {l.toUpperCase()}
        </span>
      ))}
    </button>
  );
}

export default function Navbar() {
  const { t } = useLang();
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  const navLinks = [
    { href: "#about",    label: t.nav.about    },
    { href: "#projects", label: t.nav.projects  },
    { href: "#stack",    label: t.nav.stack     },
    { href: "#contact",  label: t.nav.contact   },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-black/90 backdrop-blur-xl border-b border-white/5"
            : "py-5 bg-transparent"
        }`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-[1078px] mx-auto px-6 flex items-center justify-between">
          <LangToggle />

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/55 hover:text-white transition-colors duration-200 font-light"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 text-white/55 hover:text-white transition-colors"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Menü"
            >
              {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
              aria-label="Kapat"
            >
              <HiX size={26} />
            </button>

            <div className="absolute top-6 left-6">
              <LangToggle />
            </div>

            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-4xl font-light text-white/75 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 btn-ghost"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {t.nav.cta}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
