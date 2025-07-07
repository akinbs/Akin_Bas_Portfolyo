import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TypewriterEffectProps {
  texts: string[];
  speed?: number;
  className?: string;
}

export default function TypewriterEffect({ texts, speed = 100, className = '' }: TypewriterEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Use useRef to store current values without causing re-renders
  const currentTextIndexRef = useRef(0);
  const currentTextRef = useRef('');
  const isDeletingRef = useRef(false);
  const textsRef = useRef(texts);
  const speedRef = useRef(speed);

  // Update refs when props change
  useEffect(() => {
    textsRef.current = texts;
    speedRef.current = speed;
  }, [texts, speed]);

  // Update refs when state changes
  useEffect(() => {
    currentTextIndexRef.current = currentTextIndex;
  }, [currentTextIndex]);

  useEffect(() => {
    currentTextRef.current = currentText;
  }, [currentText]);

  useEffect(() => {
    isDeletingRef.current = isDeleting;
  }, [isDeleting]);

  // Typing animation with useCallback to prevent ESLint warnings
  useEffect(() => {
    if (texts.length === 0) return;

    let timeoutId: NodeJS.Timeout;

    const typeText = () => {
      const currentFullText = textsRef.current[currentTextIndexRef.current];
      
      if (!isDeletingRef.current) {
        // Typing
        if (currentTextRef.current.length < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, currentTextRef.current.length + 1));
          timeoutId = setTimeout(typeText, speedRef.current);
        } else {
          // Finished typing, wait then start deleting
          timeoutId = setTimeout(() => {
            setIsDeleting(true);
            typeText();
          }, 2000);
        }
      } else {
        // Deleting
        if (currentTextRef.current.length > 0) {
          setCurrentText(currentTextRef.current.substring(0, currentTextRef.current.length - 1));
          timeoutId = setTimeout(typeText, speedRef.current / 2);
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textsRef.current.length);
          timeoutId = setTimeout(typeText, 300);
        }
      }
    };

    // Start typing animation
    timeoutId = setTimeout(typeText, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [texts.length]); // Only depend on texts.length to avoid unnecessary re-runs

  // Cursor blinking animation
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <motion.span 
      className={`inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
      <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
        |
      </span>
    </motion.span>
  );
}