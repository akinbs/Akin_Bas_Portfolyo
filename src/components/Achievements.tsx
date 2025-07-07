// src/components/Achievements.tsx
import { motion } from "framer-motion";

const achievements = [
  { label: "Proje", value: 15, desc: "Başarılı proje" },
  { label: "Yıl", value: 5, desc: "Deneyim" },
  { label: "Müşteri", value: 20, desc: "Mutlu müşteri" },
];

export default function Achievements() {
  return (
    <motion.section
      className="max-w-3xl mx-auto my-12 flex justify-around bg-white/50 dark:bg-black/40 rounded-2xl shadow-xl p-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      {achievements.map((a, i) => (
        <motion.div
          key={a.label}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}>
          <span className="text-4xl font-extrabold text-[#71f9e4]">{a.value}+</span>
          <span className="text-lg font-bold text-gray-900 dark:text-white/90">{a.label}</span>
          <span className="text-gray-600 dark:text-gray-300">{a.desc}</span>
        </motion.div>
      ))}
    </motion.section>
  );
}
