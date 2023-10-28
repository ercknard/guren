import React, { useRef, useEffect, useState } from "react";

const Equalizer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const bars = Array.from({ length: 5 }); // Number of bars

  useEffect(() => {
    audioRef.current = new Audio("your_audio_file.mp3"); // Replace with your audio file

    audioRef.current.addEventListener("play", () => {
      setIsPlaying(true);
      animateBars();
    });

    audioRef.current.addEventListener("pause", () => {
      setIsPlaying(false);
      cancelAnimationFrame(animationFrameRef.current!);
    });

    return () => {
      audioRef.current?.removeEventListener("play", () => {
        setIsPlaying(true);
      });
      audioRef.current?.removeEventListener("pause", () => {
        setIsPlaying(false);
      });
    };
  }, []);

  const animateBars = () => {
    if (audioRef.current && isPlaying) {
      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaElementSource(audioRef.current);

      source.connect(analyser);
      analyser.connect(audioContext.destination);

      analyser.fftSize = 256; // Adjust the FFT size for more or fewer bars

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const renderFrame = () => {
        analyser.getByteFrequencyData(dataArray);
        bars.forEach((bar, index) => {
          if (bar) {
            const barElement = bar as HTMLElement;
            const barHeight = (dataArray[index] / 255) * 100;
            barElement.style.height = `${barHeight}%`;
          }
        });
        animationFrameRef.current = requestAnimationFrame(renderFrame);
      };

      renderFrame();
    }
  };

  return (
    <div className="to-front">
      <div className="equalizer">
        {bars.map((_, index) => (
          <div className="bar" key={index} />
        ))}
      </div>
      <audio id="audio" src="/static/sounds/music-1.mp3" controls />
    </div>
  );
};

export default Equalizer;
