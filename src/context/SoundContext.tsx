import React, { createContext, useContext, useState, useCallback } from "react";

type SoundContextType = {
  play: (file: string, volume?: number) => void;
  muted: boolean;
  toggleMute: () => void;
};

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [muted, setMuted] = useState<boolean>(
    localStorage.getItem("sound-muted") === "true"
  );

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    localStorage.setItem("sound-muted", String(next));
  };

  const play = useCallback(
    (file: string, volume = 0.25) => {
      // Respect user consent: only play after explicit user action
      if (muted) return;

      // Create audio when explicitly triggered (click/hover)
      try {
        const audio = new Audio(file);
        audio.volume = volume;
        audio.play().catch(() => {
          /* ignore — autoplay policy safe */
        });
      } catch {
        /* ignore safe fallback */
      }
    },
    [muted]
  );

  return (
    <SoundContext.Provider value={{ play, muted, toggleMute }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used within SoundProvider");
  return ctx;
};
