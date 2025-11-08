//src/components/HeroTitle.tsx
import { useEffect, useState } from "react";

interface HeroTitleProps {
  title: string;
  subtitle?: string;
}

export const HeroTitle: React.FC<HeroTitleProps> = ({ title, subtitle }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="text-center space-y-4">
      <h1
        className={`text-5xl font-extrabold text-blue-700 transition-opacity duration-1500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {title}
      </h1>

      {subtitle && (
        <p
          className={`text-xl text-indigo-600 transition-opacity duration-1500 delay-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
