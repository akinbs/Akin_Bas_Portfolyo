// src/components/Loader.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ finish }: { finish: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
      finish();
    }, 1800); // 1.8 sn loader
    return () => clearTimeout(timeout);
  }, [finish]);

  if (!show) return null;
  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-[#10142a] flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="rounded-full w-24 h-24 flex items-center justify-center border-4 border-[#71f9e4] border-t-[#3566fa] animate-spin"
        initial={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <span className="text-3xl text-[#4ce3c9] font-bold">DreamX</span>
      </motion.div>
    </motion.div>
  );
}
