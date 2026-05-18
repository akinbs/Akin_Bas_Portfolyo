import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";

const socials = [
  { icon: <FaGithub   size={16} />, href: "https://github.com/akinbs",              label: "GitHub"   },
  { icon: <FaLinkedin size={16} />, href: "https://www.linkedin.com/in/akinbas/",   label: "LinkedIn" },
  { icon: <FaEnvelope size={16} />, href: "mailto:akinbas2002@gmail.com",            label: "Email"    },
];

export default function Footer() {
  const { t } = useLang();

  const footerLinks = [
    { href: "#about",    label: t.footer.nav.about    },
    { href: "#projects", label: t.footer.nav.projects  },
    { href: "#stack",    label: t.footer.nav.stack     },
    { href: "#contact",  label: t.footer.nav.contact   },
  ];

  return (
    <footer className="px-6 pt-14 pb-10 border-t border-white/6">
      <div className="max-w-[1078px] mx-auto">

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12">
          <div>
            <a href="#" className="text-white font-light text-lg tracking-tight block">
              akın baş<span style={{ color: "rgb(160, 224, 171)" }}>.</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-6">
            {footerLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/40 hover:text-white/80 transition-colors font-light"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/28 font-light">
            © {new Date().getFullYear()} Akın Baş. {t.footer.rights}
          </p>

          <div className="flex items-center gap-3">
            {socials.map(social => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 rounded-full border border-white/12 flex items-center justify-center text-white/40 hover:text-white/80 hover:border-white/28 transition-all"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
