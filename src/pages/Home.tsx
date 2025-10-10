import { motion, useMotionValue, useTransform, easeOut } from "framer-motion";
import { Link } from "react-router-dom";
import PixelTransition from "../components/PixelTransition";
import { useState } from "react";
import { Boxes } from "../components/Boxes"; // new background
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const buttons = [
  { label: "My Work", to: "/work" },
  { label: "About Me", to: "/about" },
];

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const { theme, setTheme } = useTheme();

  const playClick = () => {
    const audio = new Audio("/sounds/click.mp3");
    audio.volume = 0.25;
    audio.play();
  };

  const toggleTheme = () => {
    playClick();
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-background text-foreground flex items-center justify-center">
      {!showContent && (
        <PixelTransition onComplete={() => setShowContent(true)} />
      )}

      {/* 🌗 Theme Toggle Button */}
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="absolute top-5 right-5 p-2 rounded-md border border-border bg-card/70 backdrop-blur-sm shadow-sm hover:bg-primary hover:text-primary-foreground transition-colors z-20"
        title="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </motion.button>

      {/* subtle animated grid background */}
      <Boxes className="opacity-40" />

      {showContent && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="flex flex-col items-center justify-center relative z-10"
        >
          {/* title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: easeOut }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-heading font-bold tracking-wide mb-2">
              Welcome to My Portfolio
            </h1>
            <p className="text-muted-foreground text-sm">Explore my world ↓</p>
          </motion.div>

          {/* 3D Buttons */}
          <div className="flex gap-8">
            {buttons.map((btn) => (
              <TiltButton
                key={btn.label}
                label={btn.label}
                to={btn.to}
                delay={0.1}
                playClick={playClick}
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

/* --- 3D Tilt Button --- */
function TiltButton({
  label,
  to,
  delay,
  playClick,
}: {
  label: string;
  to: string;
  delay: number;
  playClick: () => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [50, -50]);
  const rotateY = useTransform(x, [-50, 50], [-50, 50]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX / 2); // scale down for smoother motion
    y.set(offsetY / 2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.1, ease: easeOut, delay }}
      whileHover={{ scale: 1.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-48 h-48 bg-card shadow-[0_8px_20px_rgba(0,0,0,0.25)]
                   text-center flex items-center justify-center font-heading text-lg uppercase tracking-wide
                   transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
      >
        <Link
          to={to}
          onMouseEnter={playClick}
          className="absolute inset-0 flex items-center justify-center"
        >
          {label}
        </Link>
      </motion.div>
    </motion.div>
  );
}
