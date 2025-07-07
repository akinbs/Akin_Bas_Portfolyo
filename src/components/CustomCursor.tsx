import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState<'default' | 'text' | 'button' | 'project'>('default');

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        setCursorVariant('button');
      } else if (target.tagName === 'A' || target.closest('a')) {
        setCursorVariant('button');
      } else if (target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'H3' || target.tagName === 'P') {
        setCursorVariant('text');
      } else if (target.closest('[data-cursor="project"]')) {
        setCursorVariant('project');
      } else {
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: 'rgba(113, 249, 228, 0.3)',
      mixBlendMode: 'difference' as const,
    },
    text: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 2,
      backgroundColor: 'rgba(113, 249, 228, 0.2)',
      mixBlendMode: 'difference' as const,
    },
    button: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      backgroundColor: 'rgba(76, 227, 201, 0.4)',
      mixBlendMode: 'difference' as const,
    },
    project: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      scale: 2.5,
      backgroundColor: 'rgba(53, 102, 250, 0.3)',
      mixBlendMode: 'difference' as const,
    }
  };

  const trailVariants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: 0.5,
    },
    text: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: 0.8,
    },
    button: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: 0.7,
    },
    project: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: 1,
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-cyan-400 backdrop-blur-sm"
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.5
        }}
      />

      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-cyan-400 opacity-60"
        variants={trailVariants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 200,
          mass: 0.3
        }}
      />

    </div>
  );
}