'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface CodeLine {
  id: number;
  text: string;
  color: string;
}
  
const codeSnippets = [
  { text: 'const user = getUserData();', color: '#0ea5e9' },
  { text: 'if (auth.verified) {', color: '#ffffff' },
  { text: '  socket.emit("connected");', color: '#64748b' },
  { text: '  return data.parse();', color: '#0ea5e9' },
  { text: '}', color: '#ffffff' },
  { text: 'database.query(sql);', color: '#0ea5e9' },
  { text: 'fetch("/api/stream");', color: '#ffffff' },
  { text: 'render(component);', color: '#64748b' },
  { text: 'console.log("Deployed ✓");', color: '#0ea5e9' },
];

export default function Hero3D() {
  const [codeLines, setCodeLines] = useState<CodeLine[]>([]);
  const [lineId, setLineId] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      setCodeLines((prev) => {
        const updated = [...prev, { id: lineId, text: randomSnippet.text, color: randomSnippet.color }];
        if (updated.length > 15) updated.shift();
        return updated;
      });
      setLineId((prev) => prev + 1);
    }, 400);

    return () => clearInterval(interval);
  }, [lineId]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl mb-6 tracking-tight">
            Full-Stack Developer &<br />
            Mechanical Design<br />
            Engineer
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Building seamless digital experiences and precision-engineered mechanical solutions.
          </p>
          <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-sm transition-all">
            View Projects
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[500px] relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-lg border border-slate-800 overflow-hidden shadow-2xl"
        >
          {/* Programmer Silhouette */}
          <div className="absolute bottom-12 left-8 z-10">
            <svg width="140" height="160" viewBox="0 0 140 160" className="opacity-80">
              {/* Head */}
              <circle cx="70" cy="25" r="18" fill="#0ea5e9" opacity="0.3" />

              {/* Body */}
              <rect x="55" y="45" width="30" height="50" fill="#0ea5e9" opacity="0.2" rx="4" />

              {/* Left Arm - Typing */}
              <g>
                <line
                  x1="55"
                  y1="55"
                  x2="30"
                  y2="65"
                  stroke="#0ea5e9"
                  strokeWidth="4"
                  opacity="0.4"
                  strokeLinecap="round"
                />
                <circle cx="25" cy="68" r="6" fill="#ffffff" opacity="0.5" />
              </g>

              {/* Right Arm - Typing */}
              <g>
                <line
                  x1="85"
                  y1="55"
                  x2="110"
                  y2="65"
                  stroke="#0ea5e9"
                  opacity="0.4"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="115" cy="68" r="6" fill="#ffffff" opacity="0.5" />
              </g>

              {/* Legs */}
              <line
                x1="60"
                y1="95"
                x2="55"
                y2="125"
                stroke="#334155"
                strokeWidth="4"
                opacity="0.3"
                strokeLinecap="round"
              />
              <line
                x1="80"
                y1="95"
                x2="85"
                y2="125"
                stroke="#334155"
                strokeWidth="4"
                opacity="0.3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Terminal Screen - Glowing effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(14,165,233,0.05)_0%,_transparent_70%)]" />

          {/* Code Waterfall */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 overflow-hidden">
            <div className="space-y-1 font-mono text-sm tracking-wide h-full flex flex-col justify-end">
              {codeLines.map((line) => (
                <motion.div
                  key={line.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="whitespace-nowrap"
                  style={{
                    color: line.color,
                    textShadow: `0 0 10px ${line.color}80`,
                  }}
                >
                  &gt; {line.text}
                </motion.div>
              ))}
            </div>

            {/* Cursor blink */}
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="absolute right-6 bottom-6 w-2 h-6 bg-cyan-400"
              style={{ boxShadow: '0 0 8px #0ea5e9' }}
            />
          </div>

          {/* Corner accent lights */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-cyan-500/5 to-transparent rounded-full blur-xl" />
        </motion.div>
      </div>

      <style>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}
