//src/components/CtaButton.tsx

interface CtaButtonProps {
  text: string;
  link: string; // (наприклад, '#lead-form')
  title: string; // Потрібно для FB Pixel Simulation
}

export const CtaButton: React.FC<CtaButtonProps> = ({ text, link, title }) => {
  // Функція-симулятор відправки події (Facebook Pixel)
  const handleCtaClick = () => {
    // Симуляція FB Pixel. Використовуємо console.log, щоб це було видно
    console.log(`[FB Pixel Simulation] Lead event triggered for: ${title}`);
  };

  return (
    <a
      href={link}
      onClick={handleCtaClick}
      className="inline-block py-3 px-6 text-white font-bold rounded-lg transition duration-300 ease-in-out bg-indigo-600 hover:bg-indigo-700"
    >
      {text}
    </a>
  );
};
