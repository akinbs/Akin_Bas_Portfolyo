import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY;
      const height    = document.documentElement.scrollHeight - window.innerHeight;
      setWidth((winScroll / height) * 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-px z-[100]">
      <div
        className="h-full transition-[width] duration-75"
        style={{
          width: `${width}%`,
          background: 'linear-gradient(90deg, rgb(160, 224, 171), rgb(255, 172, 46) 50%, rgb(165, 45, 37))',
        }}
      />
    </div>
  );
}
