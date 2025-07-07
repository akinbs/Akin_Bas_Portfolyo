// src/components/TechStack.tsx
import { FaReact, FaNodeJs, FaPython, FaCss3Alt, FaJs, FaHtml5, FaGitAlt,  FaDocker, FaAws } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiFramer, SiNextdotjs, SiMongodb, SiPostgresql, SiRedis, SiExpress, SiGraphql, SiFirebase, SiVercel, SiNetlify } from "react-icons/si";
import { motion } from "framer-motion";

const stack = [
  // Frontend
  { name: "React", icon: <FaReact size={36} className="text-[#71f9e4]" /> },
  { name: "Next.js", icon: <SiNextdotjs size={36} className="text-white" /> },
  { name: "TypeScript", icon: <SiTypescript size={36} className="text-blue-400" /> },
  { name: "JavaScript", icon: <FaJs size={36} className="text-yellow-200" /> },
  { name: "HTML5", icon: <FaHtml5 size={36} className="text-orange-400" /> },
  { name: "CSS3", icon: <FaCss3Alt size={36} className="text-blue-300" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={36} className="text-teal-300" /> },
  { name: "Framer Motion", icon: <SiFramer size={36} className="text-pink-300" /> },
  
  // Backend
  { name: "Node.js", icon: <FaNodeJs size={36} className="text-green-400" /> },
  { name: "Express.js", icon: <SiExpress size={36} className="text-gray-400" /> },
  { name: "Python", icon: <FaPython size={36} className="text-yellow-400" /> },
  { name: "GraphQL", icon: <SiGraphql size={36} className="text-pink-400" /> },
  
  // Database
  { name: "MongoDB", icon: <SiMongodb size={36} className="text-green-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={36} className="text-blue-500" /> },
  { name: "Redis", icon: <SiRedis size={36} className="text-red-500" /> },
  
  // DevOps & Cloud
  { name: "Docker", icon: <FaDocker size={36} className="text-blue-400" /> },
  { name: "AWS", icon: <FaAws size={36} className="text-orange-500" /> },
  { name: "Firebase", icon: <SiFirebase size={36} className="text-yellow-500" /> },
  { name: "Vercel", icon: <SiVercel size={36} className="text-white" /> },
  { name: "Netlify", icon: <SiNetlify size={36} className="text-teal-400" /> },
  
  // Tools
  { name: "Git", icon: <FaGitAlt size={36} className="text-red-400" /> },
];

export default function TechStack() {
  return (
    <motion.section
      className="max-w-4xl mx-auto my-16 bg-white/50 dark:bg-black/40 rounded-2xl shadow-xl p-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white/90">Teknoloji Stack</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {stack.map((item, i) => (
          <motion.div
            key={item.name}
            className="flex flex-col items-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="rounded-xl p-4 bg-white/70 dark:bg-[#181823]/80 shadow-lg group-hover:scale-110 transition cursor-pointer">{item.icon}</div>
            <span className="mt-2 text-sm text-gray-700 dark:text-gray-200 opacity-80">{item.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
