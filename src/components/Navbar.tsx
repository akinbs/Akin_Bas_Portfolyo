// src/components/Navbar.tsx
import { FaMoon } from "react-icons/fa";
import { HiSun } from "react-icons/hi";
import { useTheme } from "../contexts/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <nav className="flex justify-between items-center px-8 py-5 sticky top-0 z-50 bg-white/30 dark:bg-black/20 backdrop-blur-md shadow-lg">
      <div className="font-extrabold text-2xl tracking-wide text-[#71f9e4]">DreamX</div>
      <div className="flex gap-8 items-center">
        <a href="#projects" className="font-medium text-lg text-black/80 dark:text-white/90 hover:text-[#4ce3c9] transition-colors">Projeler</a>
        <a href="#about" className="font-medium text-lg text-black/80 dark:text-white/90 hover:text-[#4ce3c9] transition-colors">Hakkımda</a>
        <a href="#contact" className="font-medium text-lg text-black/80 dark:text-white/90 hover:text-[#4ce3c9] transition-colors">İletişim</a>
        <button 
          onClick={toggleTheme} 
          className="ml-6 p-2 rounded-full bg-white/30 dark:bg-black/30 backdrop-blur transition-all duration-300 hover:scale-110"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <HiSun size={24} className="text-orange-400" />
          ) : (
            <FaMoon size={20} className="text-blue-300" />
          )}
        </button>
      </div>
    </nav>
  );
}
