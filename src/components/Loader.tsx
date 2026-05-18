import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ finish }: { finish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible]   = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            finish();
          }, 400);
          return 100;
        }
        return p + Math.random() * 18 + 4;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [finish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
        >
          {/* Ambient gradient blob */}
          <motion.div
            className="absolute w-72 h-72 rounded-full blur-[80px] pointer-events-none"
            style={{ background: 'linear-gradient(135deg, rgb(160, 224, 171), rgb(255, 172, 46), rgb(165, 45, 37))', opacity: 0.15 }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Logo */}
          <motion.div
            className="relative z-10 flex flex-col items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-4xl font-light text-white tracking-tight mb-2">akın baş</p>
            <p className="text-xs font-light text-white/35 tracking-[0.3em] uppercase">Portfolio</p>
          </motion.div>

          {/* Progress bar */}
          <div className="relative z-10 w-40 h-px bg-white/10 overflow-hidden">
            <motion.div
              className="h-full"
              style={{
                width: `${Math.min(progress, 100)}%`,
                background: 'linear-gradient(90deg, rgb(160, 224, 171), rgb(255, 172, 46), rgb(165, 45, 37))',
              }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <motion.span
            className="mt-4 text-[11px] font-light text-white/30 tabular-nums"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
