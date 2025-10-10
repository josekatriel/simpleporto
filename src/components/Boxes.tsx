import { motion } from "framer-motion";

export function Boxes({ className = "" }: { className?: string }) {
  const rows = new Array(120).fill(0);
  const cols = new Array(60).fill(0);

  const colors = [
    "#fee2e2", // pale blush pink
    "#fecaca", // soft coral
    "#fca5a5", // light red
    "#f87171", // medium red
    "#ef4444", // primary bright red
    "#f5f5f5", // near-white gray
    "#e5e7eb", // light neutral gray
    "#d1d5db", // medium gray
  ];

  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      style={{
        transform: `translate(-50%, -50%) skewX(-45deg) skewY(15deg) scale(0.8)`,
      }}
      className={`absolute top-1/2 left-1/2 flex h-[120vh] w-[120vw] ${className}`}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`r${i}`}
          className="relative h-8 w-16 border-l border-slate-700/40"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0 },
              }}
              key={`c${j}`}
              className="relative h-8 w-16 border-t border-r border-slate-700/40"
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
}
