import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Hero3DAlternative() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 overflow-hidden">
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
          className="h-[500px] relative flex items-center justify-center"
          style={{ perspective: '1000px' }}
        >
          <motion.div
            className="relative w-full h-full"
            animate={{
              rotateY: mousePosition.x,
              rotateX: -mousePosition.y,
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{ rotateZ: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-accent to-accent/50 rounded-sm"
                style={{ transform: 'translateZ(50px)' }}
              />

              <div
                className="absolute inset-0 bg-gradient-to-br from-accent/50 to-accent/20 rounded-sm"
                style={{ transform: 'translateZ(-50px)' }}
              />

              <div
                className="absolute inset-0 bg-gradient-to-r from-accent to-accent/50 rounded-sm"
                style={{ transform: 'rotateY(90deg) translateZ(50px)' }}
              />

              <div
                className="absolute inset-0 bg-gradient-to-r from-accent/50 to-accent/20 rounded-sm"
                style={{ transform: 'rotateY(-90deg) translateZ(50px)' }}
              />

              <div
                className="absolute inset-0 bg-gradient-to-b from-accent to-accent/50 rounded-sm"
                style={{ transform: 'rotateX(90deg) translateZ(50px)' }}
              />

              <div
                className="absolute inset-0 bg-gradient-to-b from-accent/50 to-accent/20 rounded-sm"
                style={{ transform: 'rotateX(-90deg) translateZ(50px)' }}
              />
            </motion.div>

            <motion.div
              className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 border-2 border-white/30 rounded-full"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{ rotateX: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />

            <motion.div
              className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 border border-accent/40 rounded-full"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{ rotateY: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            />

            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-accent rounded-full"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `translate(-50%, -50%) rotateY(${i * 45}deg) translateZ(120px)`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>

          <div className="absolute bottom-4 right-4 text-xs text-muted-foreground bg-background/50 backdrop-blur-sm px-3 py-2 rounded">
            Move mouse to interact
          </div>
        </motion.div>
      </div>
    </div>
  );
}
