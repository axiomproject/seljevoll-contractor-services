import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggeredRevealProps {
  children: ReactNode[];
  delay?: number;
  staggerDelay?: number;
  className?: string;
}

export const StaggeredReveal = ({
  children,
  delay = 0.1,
  staggerDelay = 0.1,
  className = "",
}: StaggeredRevealProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {children.map((child, index) => (
        <motion.div key={index} variants={itemVariants as Variants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredReveal;