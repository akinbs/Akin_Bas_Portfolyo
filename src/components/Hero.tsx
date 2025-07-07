// src/components/Hero.tsx
import { motion } from "framer-motion";
import ParallaxStars from "./ParallaxStars"
import TypewriterEffect from "./TypewriterEffect"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-[75vh] pt-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-[#71f9e4]/20 to-[#4ce3c9]/20 rounded-full blur-3xl"
          style={{
            top: '20%',
            left: '10%',
          }}
          animate={{
            x: mousePosition.x * 0.1,
            y: mousePosition.y * 0.1,
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            x: { duration: 0.5, ease: "easeOut" },
            y: { duration: 0.5, ease: "easeOut" },
          }}
        />
        
        <motion.div
          className="absolute w-72 h-72 bg-gradient-to-r from-[#3566fa]/15 to-[#71f9e4]/15 rounded-full blur-3xl"
          style={{
            top: '60%',
            right: '15%',
          }}
          animate={{
            x: mousePosition.x * -0.08,
            y: mousePosition.y * -0.08,
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            x: { duration: 0.5, ease: "easeOut" },
            y: { duration: 0.5, ease: "easeOut" },
          }}
        />

        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-[#4ce3c9]/10 to-[#3566fa]/10 rounded-full blur-2xl"
          style={{
            top: '10%',
            right: '25%',
          }}
          animate={{
            x: mousePosition.x * 0.05,
            y: mousePosition.y * 0.12,
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            x: { duration: 0.5, ease: "easeOut" },
            y: { duration: 0.5, ease: "easeOut" },
          }}
        />

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute w-4 h-4 bg-[#71f9e4]/30 rounded-full"
          style={{ top: '25%', left: '20%' }}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-3 h-3 bg-[#4ce3c9]/40 rounded-full"
          style={{ top: '70%', left: '80%' }}
          animate={{
            y: [15, -15, 15],
            x: [8, -8, 8],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-2 h-2 bg-[#3566fa]/50 rounded-full"
          style={{ top: '40%', right: '10%' }}
          animate={{
            y: [-8, 8, -8],
            x: [-3, 3, -3],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated Lines */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-px h-20 bg-gradient-to-b from-transparent via-[#71f9e4]/20 to-transparent"
          animate={{
            scaleY: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/2 right-1/4 w-16 h-px bg-gradient-to-r from-transparent via-[#4ce3c9]/20 to-transparent"
          animate={{
            scaleX: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <ParallaxStars />
      <motion.h1 
        className="z-10 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#71f9e4] via-[#4ce3c9] to-[#3566fa] drop-shadow-lg text-center mb-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: "linear-gradient(45deg, #71f9e4, #4ce3c9, #3566fa, #71f9e4)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Akın Baş
        </motion.span>
        <br />
        <span className="text-2xl md:text-4xl block font-normal mt-4">
          <TypewriterEffect 
            texts={[
              "React Developer",
              "Frontend Specialist", 
              "JavaScript Expert",
              "UI/UX Enthusiast",
              "Creative Web Developer"
            ]}
            speed={120}
          />
        </span>
      </motion.h1>
      <motion.p 
        className="z-10 text-lg md:text-xl max-w-2xl text-center text-white/90 dark:text-white/90 mb-7"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        Hayal gücüyle kodu birleştiriyorum.<br/>
        Modern, animasyonlu, geleceğe dönük web siteleri geliştiriyorum.<br/>
        <span className="font-semibold">React, TypeScript, Tailwind, Framer Motion</span> ile kreatif çözümler.
      </motion.p>
      <motion.div className="flex gap-5 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}>
        <motion.a 
          href="https://github.com/akinbs" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/90 dark:text-white/90"
          whileHover={{ 
            scale: 1.2, 
            rotate: 5,
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <FaGithub size={32} />
        </motion.a>
        <motion.a 
          href="https://www.linkedin.com/in/akinbas/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/90 dark:text-white/90"
          whileHover={{ 
            scale: 1.2, 
            rotate: -5,
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <FaLinkedin size={32} />
        </motion.a>
        <motion.a 
          href="#contact" 
          className="bg-[#71f9e4] text-[#113f47] font-bold px-5 py-2 rounded-xl shadow-md relative overflow-hidden"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(113, 249, 228, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#4ce3c9] to-[#71f9e4] opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10">İletişime Geç</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
