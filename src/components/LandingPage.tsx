import { Button } from '@/components/ui/button';
import { ParticleBackground } from './ParticleBackground';
import { SplitTextAnimation } from './SplitTextAnimation';

interface LandingPageProps {
  onEnter: () => void;
}

export const LandingPage = ({ onEnter }: LandingPageProps) => {
  return (
    <div className="fixed inset-0 z-50 blur-background flex items-center justify-center px-4">
      <ParticleBackground />
      
      <div className="text-center z-10 w-full max-w-lg">
        <div className="mb-8 flex flex-col items-center space-y-6">
          {/* Split text animation for "click to enter" */}
          <div className="text-lg sm:text-xl text-white font-rajdhani mb-4">
            <SplitTextAnimation 
              text="click to enter" 
              className="glow-text-white"
              delay={500}
            />
          </div>
          
          {/* Cat image */}
          <img 
            src="https://i.pinimg.com/originals/59/54/b4/5954b408c66525ad932faa693a647e3f.jpg" 
            alt="Cat" 
            className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            onClick={onEnter}
          />
        </div>
        
        <Button
          onClick={onEnter}
          size="default"
          className="bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-500 hover:scale-105 font-orbitron w-full sm:w-auto"
        >
          Enter
        </Button>
        
        {/* Make the entire landing page clickable */}
        <div 
          className="absolute inset-0 cursor-pointer z-0"
          onClick={onEnter}
        />
      </div>
    </div>
  );
};