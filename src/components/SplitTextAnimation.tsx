import { useEffect, useState } from 'react';

interface SplitTextAnimationProps {
  text: string;
  className?: string;
  delay?: number;
}

export const SplitTextAnimation = ({ text, className = "", delay = 0 }: SplitTextAnimationProps) => {
  const [animatedLetters, setAnimatedLetters] = useState<boolean[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      text.split('').forEach((_, index) => {
        setTimeout(() => {
          setAnimatedLetters(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, index * 150);
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <div className={`inline-block ${className}`}>
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-700 ${
            animatedLetters[index]
              ? 'transform translate-y-0 opacity-100 scale-100'
              : 'transform translate-y-12 opacity-0 scale-75'
          }`}
          style={{
            transitionDelay: `${index * 75}ms`,
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </div>
  );
};