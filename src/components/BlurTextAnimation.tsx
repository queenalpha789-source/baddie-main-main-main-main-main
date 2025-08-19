import { useEffect, useState } from 'react';

interface BlurTextAnimationProps {
  text: string;
  className?: string;
  delay?: number;
}

export const BlurTextAnimation = ({ text, className = "", delay = 0 }: BlurTextAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-1500 ${
        isVisible
          ? 'filter blur-0 opacity-100 transform translate-y-0 scale-100'
          : 'filter blur-md opacity-0 transform translate-y-8 scale-95'
      } ${className}`}
    >
      {text}
    </div>
  );
};