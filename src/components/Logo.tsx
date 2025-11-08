// src/components/Logo.tsx
interface LogoProps {
  size?: "sm" | "md" | "lg";
  path: string;
  altText: string;
}

export const Logo: React.FC<LogoProps> = ({ size = "sm", path, altText }) => {
  // 1. Визначаємо класи Tailwind для кожного розміру
  const sizeClasses = {
    sm: "w-8 h-8", // Маленький
    md: "w-12 h-12", // Середній (за замовчуванням)
    lg: "w-20 h-20", // Великий
  };

  // 2. Отримуємо клас на основі пропса size
  const className = sizeClasses[size] || sizeClasses.md;

  return (
    <img src={path} alt={altText} className={`block mx-auto ${className}`} />
  );
};
