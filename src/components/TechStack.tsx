import {
  FaReact, FaNodeJs, FaPython, FaJs,
  FaGitAlt, FaDocker, FaAws,
} from "react-icons/fa";
import {
  SiTypescript, SiTailwindcss, SiFramer, SiNextdotjs,
  SiPostgresql, SiRedis, SiFirebase, SiVercel,
  SiFlutter, SiVite, SiFastapi, SiDjango,
  SiMysql, SiSqlite, SiLinux,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";

interface StackItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const stack: StackItem[] = [
  // ── Frontend (8) ──────────────────────────────────────────
  { name: "React",         icon: <FaReact />,       color: "#61DAFB" },
  { name: "TypeScript",    icon: <SiTypescript />,  color: "#3178C6" },
  { name: "JavaScript",    icon: <FaJs />,          color: "#F7DF1E" },
  { name: "Next.js",       icon: <SiNextdotjs />,   color: "#ffffff" },
  { name: "Tailwind CSS",  icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Framer Motion", icon: <SiFramer />,      color: "#E95D94" },
  { name: "Flutter",       icon: <SiFlutter />,     color: "#54C5F8" },
  { name: "Vite",          icon: <SiVite />,        color: "#646CFF" },
  // ── Backend (4) ───────────────────────────────────────────
  { name: "FastAPI",       icon: <SiFastapi />,     color: "#009688" },
  { name: "Python",        icon: <FaPython />,      color: "#3776AB" },
  { name: "Node.js",       icon: <FaNodeJs />,      color: "#339933" },
  { name: "Django",        icon: <SiDjango />,      color: "#44B78B" },
  // ── Database (5) ──────────────────────────────────────────
  { name: "Firebase",      icon: <SiFirebase />,    color: "#FFCA28" },
  { name: "PostgreSQL",    icon: <SiPostgresql />,  color: "#336791" },
  { name: "MySQL",         icon: <SiMysql />,       color: "#4479A1" },
  { name: "Redis",         icon: <SiRedis />,       color: "#DC382D" },
  { name: "SQLite",        icon: <SiSqlite />,      color: "#57AFDC" },
  // ── DevOps (5) ────────────────────────────────────────────
  { name: "Docker",        icon: <FaDocker />,      color: "#2496ED" },
  { name: "AWS",           icon: <FaAws />,         color: "#FF9900" },
  { name: "Git",           icon: <FaGitAlt />,      color: "#F05032" },
  { name: "Vercel",        icon: <SiVercel />,      color: "#ffffff" },
  { name: "Linux",         icon: <SiLinux />,       color: "#FCC624" },
];

export default function TechStack() {
  const { t } = useLang();

  const categories = [
    { label: "Frontend",          items: stack.slice(0, 8)   },
    { label: "Backend",           items: stack.slice(8, 12)  },
    { label: t.stack.database,    items: stack.slice(12, 17) },
    { label: "DevOps",            items: stack.slice(17)     },
  ];

  return (
    <section id="stack" className="py-28 px-6 bg-black">
      <div className="max-w-[1078px] mx-auto">

        <motion.div
          className="flex items-baseline gap-5 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">03</span>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">{t.stack.heading}</h2>
        </motion.div>

        <div className="space-y-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
            >
              <h3 className="text-[11px] font-light text-white/28 uppercase tracking-[0.25em] mb-5">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    className="group flex items-center gap-2.5 px-4 py-2.5 rounded-pill border border-white/10 bg-white/[0.025] cursor-default hover:border-white/22 hover:bg-white/[0.045] transition-all duration-200"
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.08 + i * 0.04 }}
                  >
                    <span className="text-lg flex-shrink-0" style={{ color: item.color }}>
                      {item.icon}
                    </span>
                    <span className="text-sm font-light text-white/60 group-hover:text-white/85 transition-colors whitespace-nowrap">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 h-px bg-white/6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </section>
  );
}
