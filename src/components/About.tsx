// src/components/About.tsx
import { motion } from "framer-motion";
import { memo } from "react";
import profileImg from "../assets/akın.jpg"
// Profil fotoğrafı için assets içine bir görsel eklemeni öneririm.
// Geçici olarak rastgele bir avatar da kullanılabilir:


const About = memo(function About() {
  return (
    <motion.section
      id="about"
      className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 p-8 rounded-3xl bg-white/60 dark:bg-black/40 backdrop-blur-2xl shadow-2xl my-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <motion.img
        src={profileImg}
        alt="Profil"
        className="rounded-full w-40 h-40 object-cover object-center border-4 border-[#71f9e4] shadow-lg"
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white/90">Hakkımda</h2>
        <p className="text-lg mb-3 text-gray-700 dark:text-gray-300">
          Merhaba! Kullanıcı deneyimini ve modern tasarımı merkeze alarak, dijital dünyada unutulmaz izler bırakan projeler geliştiriyorum.
          Kodlamaya tutkuyla bağlıyım ve işimi her zaman bir adım öteye taşımak için sürekli yeni şeyler öğreniyorum.
        </p>
        <div className="flex flex-wrap gap-3 mt-4">
          {["React", "TypeScript", "Next.js", "Framer Motion", "Tailwind", "Node.js"].map(skill => (
            <span key={skill} className="px-4 py-2 rounded-xl bg-[#71f9e4]/20 dark:bg-[#4ce3c9]/20 font-semibold text-gray-800 dark:text-gray-200">{skill}</span>
          ))}
        </div>
      </div>
    </motion.section>
  );
});

export default About;
