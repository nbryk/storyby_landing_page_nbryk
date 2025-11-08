// src/components/ScrollReveal.tsx
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
  // Хук відстежує, чи потрапив елемент у видиму область
  const { ref, inView } = useInView({
    triggerOnce: true, // Запускаємо анімацію лише один раз
    threshold: 0.1, // Спрацює, коли 10% елемента буде видно
  });

  const transitionStyle = {
    // Встановлюємо transition для плавного ефекту
    transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
    // Якщо inView = true (видимий), opacity=1 і transform=0 (на місці)
    // Якщо inView = false (невидимий), opacity=0 і transform=translateY(20px) (трохи зміщений)
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
  };

  return (
    <div ref={ref} style={transitionStyle}>
      {children}
    </div>
  );
};
