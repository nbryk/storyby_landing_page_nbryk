interface CtaButtonProps {
  text: string;
  link: string;
  title: string; // Used for FB Pixel Simulation identification
}

export const CtaButton: React.FC<CtaButtonProps> = ({ text, link, title }) => {
  const handleCtaClick = () => {
    // Simulation of FB Pixel. We use console.log to make it visible
    console.log(`[FB Pixel Simulation] Lead event triggered for: ${title}`);
  };

  return (
    <a
      href={link}
      onClick={handleCtaClick}
      className="
      inline-block py-3 px-6
       text-white font-bold 
       rounded-lg 
       transition duration-300 ease-in-out
        bg-indigo-600 hover:bg-indigo-700"
    >
      {text}
    </a>
  );
};
