"use client";

import { motion } from "motion/react";
import { Children, ReactNode } from "react";

export default function AnimatedSections({ children }: { children: ReactNode }) {
  const childArray = Children.toArray(children);

  return (
    <>
      {childArray.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
}
