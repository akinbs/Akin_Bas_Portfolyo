import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";

function getInitials(name: string) {
  return name.split(" ").map(n => n[0]).join("").toUpperCase();
}

export default function Testimonials() {
  const { t } = useLang();

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
          <span className="section-number">05</span>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">{t.testimonials.heading}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.testimonials.items.map((item, i) => (
            <motion.div
              key={i}
              className="card-dark p-6 flex flex-col justify-between"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className="w-3 h-3 text-white/35" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm text-white/55 leading-relaxed font-light flex-1 mb-6">
                "{item.content}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/6">
                <div className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-light text-white/65">{getInitials(item.name)}</span>
                </div>
                <div>
                  <p className="text-sm font-light text-white/80">{item.name}</p>
                  <p className="text-xs text-white/32 font-light">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
