"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const RADIUS = 52;          // circle radius in px
const STROKE = 8;           // stroke width in px
const CIRC = 2 * Math.PI * RADIUS; // full circumference

export default function AnimatedScore() {
  const [percent, setPercent] = useState(50);
  const controls = useAnimation();

  useEffect(() => {
    if (typeof window === "undefined" || typeof performance === "undefined") return;

    controls.start({
      strokeDashoffset: CIRC * (1 - 0.95), // target 95 %
      transition: { duration: 2, ease: "easeInOut" },
    });

    // Manually tween the numeric label
    const duration = 2000;
    const start = performance.now();
    const from = 50;
    const to = 95;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setPercent(Math.round(from + (to - from) * progress));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [controls]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* SVG rotated -90° so progress starts at 12 o'clock */}
      <svg
        width={(RADIUS + STROKE) * 2}
        height={(RADIUS + STROKE) * 2}
        className="-rotate-90"
      >
        {/* Grey track */}
        <circle
          cx={RADIUS + STROKE}
          cy={RADIUS + STROKE}
          r={RADIUS}
          stroke="#e5e7eb" /* Tailwind zinc-200 */
          strokeWidth={STROKE}
          fill="none"
        />

        {/* Animated arc */}
        <motion.circle
          cx={RADIUS + STROKE}
          cy={RADIUS + STROKE}
          r={RADIUS}
          stroke="#22c55e" /* Tailwind green-500 */
          strokeWidth={STROKE}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={CIRC}
          strokeDashoffset={CIRC * (1 - 0.5)} // initial 50 %
          animate={controls}
        />
      </svg>

      {/* Numeric label */}
      <span className="mt-2 text-2xl font-semibold text-zinc-800">
        {percent}%
      </span>
    </div>
  );
} 