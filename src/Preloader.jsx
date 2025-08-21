import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ duration = 2000, onComplete }) {
  const [visible, setVisible] = useState(true);
  const [typedText, setTypedText] = useState("");

  const tagline = "Loading portfolio…";

  useEffect(() => {
    const start = performance.now();
    let rafId;

    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      if (pct < 100) {
        rafId = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setVisible(false);
          onComplete && onComplete();
        }, 200);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [duration, onComplete]);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setTypedText(tagline.slice(0, i + 1));
      i++;
      if (i === tagline.length) clearInterval(typing);
    }, 100);
    return () => clearInterval(typing);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-[#0e0514] to-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex gap-2 mb-6">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="h-4 w-4 rounded-full bg-cyan-400"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
          <p className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-bold text-xl tracking-wide whitespace-pre">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}