"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

/**
 * Fade-in on scroll wrapper – użyj tego na sekcjach które mają się
 * pojawiać przy scrollowaniu (whileInView).
 */
export function FadeInView({
  children,
  delay = 0,
  className,
  direction = "up",
}: FadeInProps) {
  const offset = 30;
  const initial = {
    opacity: 0,
    y: direction === "up" ? offset : direction === "down" ? -offset : 0,
    x: direction === "left" ? offset : direction === "right" ? -offset : 0,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Fade-in on mount wrapper – użyj w Hero na elementach które wjeżdżają
 * zaraz po załadowaniu strony.
 */
export function FadeInMount({
  children,
  delay = 0,
  className,
  direction = "up",
}: FadeInProps) {
  const offset = 24;
  const initial = {
    opacity: 0,
    y: direction === "up" ? offset : direction === "down" ? -offset : 0,
    x: direction === "left" ? offset : direction === "right" ? -offset : 0,
  };

  return (
    <motion.div
      initial={initial}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
