//src/components/HeroTitle.tsx
interface HeroTitleProps {
  title: string;
  subtitle?: string;
}

export const HeroTitle: React.FC<HeroTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center space-y-4">
      {/* Плавне з'явлення: opacity-0 на початку, перехід 1000мс, і final state opacity-100 */}
      <h1 className="text-5xl font-extrabold text-gray-900 opacity-0 animate-fade-in">
        {title}
      </h1>

      {/* Плавне з'явлення з затримкою */}
      <p className="text-xl text-indigo-600 opacity-0 animate-fade-in delay-200">
        {subtitle}
      </p>
    </div>
  );
};
