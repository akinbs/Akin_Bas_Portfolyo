// src/components/ScrollTopButton.tsx
import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-[100] bg-[#71f9e4] hover:bg-[#4ce3c9] p-3 rounded-full shadow-2xl transition"
    >
      <FaChevronUp className="text-[#10142a] text-lg" />
    </button>
  );
}
