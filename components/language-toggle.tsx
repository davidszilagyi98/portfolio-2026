"use client";

import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export function LanguageToggle() {
  const { language, setLanguage } = useI18n();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hu" : "en");
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-full hover:bg-white/10 dark:hover:bg-white/5 bg-black/5 dark:bg-transparent transition-colors text-sm font-medium"
      aria-label={`Switch to ${language === "en" ? "Hungarian" : "English"}`}
    >
      <Languages className="w-4 h-4 text-muted-foreground" />
      <span className="text-xs">{language === "en" ? "EN" : "HU"}</span>
    </motion.button>
  );
}
