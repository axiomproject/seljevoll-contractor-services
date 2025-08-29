import { motion, useInView, Variant } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface RevealAnimationProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

export const RevealAnimation = ({
  children,
  width = "fit-content",
  direction = "up",
  delay = 0,
  duration = 0.5,
  once = true,
  className = "",
}: RevealAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once });

  const getVariants = (): { hidden: Variant; visible: Variant } => {
    const distance = 50;
    
    switch (direction) {
      case "down":
        return {
          hidden: { y: -distance, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case "left":
        return {
          hidden: { x: distance, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      case "right":
        return {
          hidden: { x: -distance, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      case "up":
      default:
        return {
          hidden: { y: distance, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
    }
  };

  const variants = getVariants();

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration,
          delay,
          ease: "easeOut"
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealAnimation;