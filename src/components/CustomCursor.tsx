import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos,     setPos]     = useState({ x: 0, y: 0 });
  const [variant, setVariant] = useState<"default" | "hover">("default");

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button']")) setVariant("hover");
      else setVariant("default");
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-white/50"
        animate={{
          x: pos.x - (variant === "hover" ? 18 : 12),
          y: pos.y - (variant === "hover" ? 18 : 12),
          width:   variant === "hover" ? 36 : 24,
          height:  variant === "hover" ? 36 : 24,
          opacity: 0.6,
        }}
        transition={{ type: "spring", damping: 22, stiffness: 280, mass: 0.4 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white"
        animate={{ x: pos.x - 3, y: pos.y - 3 }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.2 }}
      />
    </div>
  );
}
