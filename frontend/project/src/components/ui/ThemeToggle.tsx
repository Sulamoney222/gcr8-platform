import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-gcr8-purple-950/10 dark:bg-white/10 hover:bg-gcr8-purple-950/20 dark:hover:bg-white/20 transition-colors"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'light' ? (
            <Moon className="w-5 h-5 text-gcr8-purple-950" />
          ) : (
            <Sun className="w-5 h-5 text-white" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};
