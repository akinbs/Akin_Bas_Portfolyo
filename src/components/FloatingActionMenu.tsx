import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaShare, FaPalette, FaEllipsisV, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

interface FloatingAction {
  icon: React.ReactNode;
  label: string;
  action: () => void;
  gradient: string;
  description: string;
}

export default function FloatingActionMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleTheme, theme } = useTheme();

  const actions: FloatingAction[] = [
    {
      icon: <FaGithub />,
      label: 'GitHub',
      description: 'View source code',
      action: () => window.open('https://github.com/akinbas2002', '_blank'),
      gradient: 'from-gray-800 to-gray-900'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      description: 'Connect with me',
      action: () => window.open('https://www.linkedin.com/in/akinbas/', '_blank'),
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      description: 'Send me a message',
      action: () => window.open('mailto:akinbas2002@gmail.com'),
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: <FaDownload />,
      label: 'Resume',
      description: 'Download CV/Resume',
      action: () => {
        const link = document.createElement('a');
        link.href = '#';
        link.download = 'Akin-Bas-Resume.pdf';
        link.click();
      },
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: <FaPalette />,
      label: theme === 'dark' ? 'Light Mode' : 'Dark Mode',
      description: 'Switch theme',
      action: toggleTheme,
      gradient: 'from-orange-500 to-pink-500'
    },
    {
      icon: <FaShare />,
      label: 'Share',
      description: 'Share this portfolio',
      action: () => {
        if (navigator.share) {
          navigator.share({
            title: 'Akın Baş Portfolio',
            text: 'Check out this amazing portfolio!',
            url: window.location.href
          });
        } else {
          navigator.clipboard.writeText(window.location.href);
          const notification = document.createElement('div');
          notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-[9999]';
          notification.textContent = 'Link copied to clipboard!';
          document.body.appendChild(notification);
          setTimeout(() => notification.remove(), 3000);
        }
      },
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  // Auto-close on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    open: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 300
      }
    },
    closed: {
      x: 20,
      y: 0,
      opacity: 0,
      scale: 0.5,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 300
      }
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", damping: 20, stiffness: 300, delay: 1.5 }}
    >
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute bottom-16 right-0 flex flex-col items-end gap-2"
          >
            {actions.map((action, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Action button - clickable without tooltip */}
                <motion.button
                  onClick={() => {
                    action.action();
                    setIsOpen(false);
                  }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center text-white shadow-lg border border-white/10`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                >
                  {action.icon}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl border border-white/10 ${
          isOpen 
            ? 'bg-gradient-to-br from-red-500 to-red-600' 
            : 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
          {isOpen ? (
            <span className="text-xl font-bold">×</span>
          ) : (
            <FaEllipsisV className="text-sm" />
          )}
        </motion.div>
      </motion.button>
    </motion.div>
  );
}