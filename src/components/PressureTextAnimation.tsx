import { useEffect, useState } from 'react';

interface PressureTextAnimationProps {
  text: string;
  className?: string;
  delay?: number;
}

export const PressureTextAnimation = ({ text, className = "", delay = 0 }: PressureTextAnimationProps) => {
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
        }, index * 100);
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <div className={`inline-block ${className}`}>
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ${
            animatedLetters[index]
              ? 'transform scale-110 opacity-100'
              : 'transform scale-75 opacity-0'
          }`}
          style={{
            transitionDelay: `${index * 50}ms`,
            animation: animatedLetters[index] ? 'pressure 2s ease-in-out infinite' : 'none',
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
      <style jsx>{`
        @keyframes pressure {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};