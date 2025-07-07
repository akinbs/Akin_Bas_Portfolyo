// src/components/ParallaxStars.tsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ParallaxStars() {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current) return;
      const { clientX: x, clientY: y } = e;
      const xPercent = (x / window.innerWidth) * 100;
      const yPercent = (y / window.innerHeight) * 100;
      setMousePosition({ x: xPercent, y: yPercent });
    };

    window.addEventListener("mousemove", handler);
    
    return () => {
      window.removeEventListener("mousemove", handler);
    };
  }, []);

  // Generate modern floating elements
  const generateFloatingElements = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 15 + Math.random() * 10,
      size: 6 + Math.random() * 12,
      opacity: 0.15 + Math.random() * 0.25,
    }));
  };

  const floatingElements = generateFloatingElements(15);
  const meshLayers = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div ref={ref} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Modern Animated Mesh Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(139, 92, 246, 0.08) 0%, 
              rgba(168, 85, 247, 0.05) 30%,
              rgba(236, 72, 153, 0.03) 60%,
              transparent 80%),
            radial-gradient(circle at ${100 - mousePosition.x * 0.7}% ${100 - mousePosition.y * 0.8}%, 
              rgba(59, 130, 246, 0.06) 0%, 
              rgba(14, 165, 233, 0.04) 40%,
              rgba(6, 182, 212, 0.02) 70%,
              transparent 90%),
            conic-gradient(from ${mousePosition.x * 3.6}deg at 30% 70%, 
              rgba(245, 101, 101, 0.04) 0deg,
              rgba(251, 146, 60, 0.04) 90deg,
              rgba(34, 197, 94, 0.04) 180deg,
              rgba(139, 92, 246, 0.04) 270deg,
              rgba(245, 101, 101, 0.04) 360deg),
            linear-gradient(135deg, 
              rgba(4, 7, 15, 0.98) 0%, 
              rgba(12, 15, 28, 0.96) 25%,
              rgba(20, 25, 45, 0.94) 50%,
              rgba(12, 15, 28, 0.96) 75%,
              rgba(4, 7, 15, 0.98) 100%)
          `,
        }}
        animate={{
          opacity: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Dynamic Mesh Layers */}
      {meshLayers.map((_, i) => (
        <motion.div
          key={`mesh-${i}`}
          className="absolute inset-0"
          style={{
            background: `
              conic-gradient(from ${180 + i * 60}deg at ${40 + i * 10}% ${30 + i * 15}%, 
                rgba(139, 92, 246, ${0.02 + i * 0.008}) 0deg,
                rgba(236, 72, 153, ${0.015 + i * 0.006}) 72deg,
                rgba(59, 130, 246, ${0.012 + i * 0.005}) 144deg,
                rgba(34, 197, 94, ${0.01 + i * 0.004}) 216deg,
                rgba(251, 146, 60, ${0.008 + i * 0.003}) 288deg,
                rgba(139, 92, 246, ${0.02 + i * 0.008}) 360deg)
            `,
          }}
          animate={{
            transform: [
              `translateX(${-15 + i * 3}px) translateY(${-12 + i * 2}px) rotate(${i * 45}deg) scale(1)`,
              `translateX(${15 + i * 3}px) translateY(${12 + i * 2}px) rotate(${i * 45 + 120}deg) scale(1.1)`,
              `translateX(${-15 + i * 3}px) translateY(${-12 + i * 2}px) rotate(${i * 45 + 240}deg) scale(0.95)`,
              `translateX(${15 + i * 3}px) translateY(${12 + i * 2}px) rotate(${i * 45 + 360}deg) scale(1)`,
            ],
            opacity: [0.4, 0.8, 0.6, 0.4],
          }}
          transition={{
            duration: 25 + i * 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 3,
          }}
        />
      ))}

      {/* Vibrant Floating Orbs */}
      {floatingElements.map((element, i) => (
        <motion.div
          key={`vibrant-${element.id}`}
          className="absolute rounded-full"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            background: `
              radial-gradient(circle at 25% 25%, 
                rgba(${i % 2 === 0 ? '139, 92, 246' : '236, 72, 153'}, ${element.opacity}) 0%, 
                rgba(${i % 3 === 0 ? '59, 130, 246' : '34, 197, 94'}, ${element.opacity * 0.7}) 40%,
                rgba(${i % 4 === 0 ? '251, 146, 60' : '245, 101, 101'}, ${element.opacity * 0.4}) 70%,
                transparent 100%)
            `,
            filter: `blur(${Math.random() * 1.5 + 0.5}px)`,
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, Math.cos(i) * 15, 0],
            scale: [0.9, 1.3, 0.9],
            opacity: [element.opacity * 0.4, element.opacity, element.opacity * 0.4],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }}
        />
      ))}

      {/* Modern Gradient Waves */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(120deg, 
              transparent 0%, 
              rgba(139, 92, 246, 0.04) 25%, 
              transparent 50%),
            linear-gradient(-120deg, 
              transparent 0%, 
              rgba(236, 72, 153, 0.035) 30%, 
              transparent 60%),
            linear-gradient(60deg, 
              transparent 20%, 
              rgba(59, 130, 246, 0.03) 50%, 
              transparent 80%)
          `,
        }}
        animate={{
          transform: [
            'translateX(-80px) translateY(-40px) rotate(0deg)',
            'translateX(80px) translateY(40px) rotate(180deg)',
            'translateX(-80px) translateY(-40px) rotate(360deg)',
          ],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated Particle Field */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(1px 1px at 15% 25%, rgba(139, 92, 246, 0.6) 0%, transparent 50%),
            radial-gradient(1px 1px at 35% 65%, rgba(236, 72, 153, 0.5) 0%, transparent 50%),
            radial-gradient(1px 1px at 55% 15%, rgba(59, 130, 246, 0.55) 0%, transparent 50%),
            radial-gradient(1px 1px at 75% 75%, rgba(34, 197, 94, 0.45) 0%, transparent 50%),
            radial-gradient(1px 1px at 25% 45%, rgba(251, 146, 60, 0.4) 0%, transparent 50%),
            radial-gradient(1px 1px at 65% 85%, rgba(245, 101, 101, 0.35) 0%, transparent 50%)
          `,
          backgroundSize: '150px 150px, 220px 220px, 180px 180px, 200px 200px, 240px 240px, 160px 160px',
        }}
        animate={{
          backgroundPosition: [
            '0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%',
            '100% 100%, -50% 150%, 150% -50%, -100% -100%, 75% 25%, 25% 75%',
            '0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%',
          ],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Dynamic Geometric Elements */}
      <motion.div
        className="absolute top-1/6 left-1/5 w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-50"
        animate={{
          y: [0, -60, 0],
          x: [0, 40, 0],
          opacity: [0.3, 0.8, 0.3],
          scale: [0.8, 1.8, 0.8],
          rotate: [0, 360, 720],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-2/3 right-1/4 w-3 h-3 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-40"
        animate={{
          y: [0, -45, 0],
          x: [0, -30, 0],
          opacity: [0.2, 0.7, 0.2],
          scale: [0.6, 1.4, 0.6],
          rotate: [360, 0, -360],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/6 w-1 h-1 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full opacity-60"
        animate={{
          y: [0, -35, 0],
          x: [0, 25, 0],
          opacity: [0.4, 0.9, 0.4],
          scale: [1, 2.5, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      />

      <motion.div
        className="absolute top-4/5 left-1/3 w-1.5 h-1.5 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-45"
        animate={{
          y: [0, -55, 0],
          x: [0, 35, 0],
          opacity: [0.25, 0.75, 0.25],
          scale: [0.7, 1.6, 0.7],
          rotate: [180, 540, 900],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 9,
        }}
      />
    </div>
  );
}
