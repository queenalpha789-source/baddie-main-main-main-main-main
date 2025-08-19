import { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  isPlaying: boolean;
}

export const VideoBackground = ({ isPlaying }: VideoBackgroundProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      // Set volume and play audio on loop
      audioRef.current.volume = 0.7;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(console.error);
    } else if (!isPlaying && audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {isPlaying && (
        <>
          <iframe
            className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full"
            src="https://www.youtube.com/embed/IbdJwodbcys?autoplay=1&mute=1&loop=1&playlist=IbdJwodbcys&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&fs=0&disablekb=1"
            title="Background Video"
            allow="autoplay; encrypted-media"
            style={{ 
              transform: 'scale(1.2)',
              filter: 'brightness(0.6)',
              aspectRatio: '16/9',
            }}
          />
          <audio
            ref={audioRef}
            preload="auto"
            loop
          >
            <source src="/soundtrack.mp3.mp3" type="audio/mpeg" />
          </audio>
        </>
      )}
      <div className="absolute inset-0 bg-black/40 z-10" />
    </div>
  );
};