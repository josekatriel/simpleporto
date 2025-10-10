import { motion, easeInOut } from "framer-motion";
import { useEffect, useState } from "react";

export default function PixelTransition({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [phase, setPhase] = useState<"enter" | "exit">("enter");
  const [visible, setVisible] = useState(true);

  const pixelCount = 100;
  const pixels = Array.from({ length: pixelCount });

  useEffect(() => {
    // entrance lasts ~1.2s, then trigger exit
    const enterTimer = setTimeout(() => setPhase("exit"), 1500);
    // full remove after another 0.6s
    const endTimer = setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 2300);
    return () => {
      clearTimeout(enterTimer);
      clearTimeout(endTimer);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background grid grid-cols-10 grid-rows-10 overflow-hidden">
      {pixels.map((_, i) => {
        // little randomness so it feels organic
        const delay = i * 0.007 + Math.random() * 0.01;

        return (
          <motion.div
            key={i}
            className="bg-primary"
            initial={{ opacity: 0, scale: 0, x: 100, y: -100 }}
            animate={
              phase === "enter"
                ? { opacity: 1, scale: 1, x: 0, y: 0 }
                : { opacity: 0, scale: 0.6, x: -50, y: 50 }
            }
            transition={{
              delay,
              duration: 0.35,
              ease: easeInOut,
              type: "tween",
            }}
          />
        );
      })}
    </div>
  );
}
