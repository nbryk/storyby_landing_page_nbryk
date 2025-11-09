import React from "react";
import { useInView } from "react-intersection-observer";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
}) => {
  // Tracks whether the element has entered the viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // Run the animation only once
    threshold: 0.1, // Fires when 10% of the element is visible
  });

  const transitionStyle = {
    transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
  };

  return (
    <div ref={ref} style={transitionStyle}>
      {children}
    </div>
  );
};
