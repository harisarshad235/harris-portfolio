import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Reusable scroll-reveal wrapper component using Framer Motion.
 * Supports configurable direction, delay, duration, and accessibility (reduced motion).
 */
export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.55,
  distance = 28,
  className = '',
  amount = 0.15,
  once = true,
  as = 'div',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  const getInitialPosition = () => {
    if (shouldReduceMotion) return { x: 0, y: 0 };
    switch (direction) {
      case 'up':
        return { x: 0, y: distance };
      case 'down':
        return { x: 0, y: -distance };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialPos = getInitialPosition();

  const Component = motion[as] || motion.div;

  return (
    <Component
      initial={shouldReduceMotion ? { opacity: 1, x: 0, y: 0 } : {
        opacity: 0,
        ...initialPos,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once, margin: "-30px 0px", amount: 0.1 }}
      transition={shouldReduceMotion ? { duration: 0.01 } : {
        type: "spring",
        stiffness: 280,
        damping: 26,
        delay,
      }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * Container that orchestrates staggered reveals of its child `StaggerItem`s on scroll.
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  delayChildren = 0.05,
  className = '',
  amount = 0.1,
  once = true,
  as = 'div',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
        delayChildren: shouldReduceMotion ? 0 : delayChildren,
      },
    },
  };

  return (
    <Component
      variants={containerVariants}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once, margin: "-30px 0px", amount: 0.1 }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * Child item designed to be used inside `StaggerContainer`.
 */
export function StaggerItem({
  children,
  className = '',
  yOffset = 24,
  duration = 0.5,
  as = 'div',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : yOffset,
      scale: shouldReduceMotion ? 1 : 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: shouldReduceMotion ? { duration: 0.01 } : {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <Component
      variants={itemVariants}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
