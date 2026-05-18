import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { animate } from "animejs";
import { useLang } from "../context/LangContext";

const statValues = [
  { value: 15, suffix: "+" },
  { value: 5,  suffix: "+" },
  { value: 20, suffix: "+" },
  { value: 98, suffix: "%" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref    = useRef<HTMLSpanElement>(null);
  const ranRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !ranRef.current) {
          ranRef.current = true;
          const obj = { value: 0 };
          animate(obj, {
            value:    target,
            duration: 1800,
            easing:   "easeOutExpo",
            onUpdate: () => setCount(Math.round(obj.value)),
          } as any);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Achievements() {
  const { t } = useLang();
  const stats = statValues.map((v, i) => ({ ...v, ...t.achievements.stats[i] }));

  return (
    <section className="py-28 px-6 bg-black">
      <div className="max-w-[1078px] mx-auto">

        <motion.div
          className="flex items-baseline gap-5 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">04</span>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">{t.achievements.heading}</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="p-8 md:p-10 border-r border-b border-white/8 last:border-r-0 [&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r lg:[&:nth-child(4)]:border-r-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-light text-white mb-3 tracking-tight tabular-nums">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm font-light text-white/55 mb-1.5">{stat.label}</p>
              <p className="text-xs text-white/28 font-light">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
