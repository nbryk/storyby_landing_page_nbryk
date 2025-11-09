interface LogoProps {
  size?: "sm" | "md" | "lg";
  path: string;
  altText: string;
}

export const Logo: React.FC<LogoProps> = ({ size = "sm", path, altText }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-20 h-20",
  };

  const className = sizeClasses[size];

  return (
    <img src={path} alt={altText} className={`block mx-auto ${className}`} />
  );
};
