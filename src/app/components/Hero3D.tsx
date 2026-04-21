import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'motion/react';

function MechanicalAssembly() {
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#0ea5e9" metalness={0.8} roughness={0.2} />
      </mesh>

      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
      </mesh>

      <mesh position={[1.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.3, 0.3, 2, 32]} />
        <meshStandardMaterial color="#334155" metalness={0.7} roughness={0.3} />
      </mesh>

      <mesh position={[-1.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.3, 0.3, 2, 32]} />
        <meshStandardMaterial color="#334155" metalness={0.7} roughness={0.3} />
      </mesh>

      <mesh position={[0, 0, 1.5]}>
        <torusGeometry args={[0.8, 0.2, 16, 100]} />
        <meshStandardMaterial color="#0ea5e9" metalness={0.8} roughness={0.2} />
      </mesh>

      <mesh position={[0, -1.5, 0]}>
        <octahedronGeometry args={[0.8]} />
        <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
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
          className="h-[500px] relative"
        >
          <Canvas>
            <PerspectiveCamera makeDefault position={[5, 5, 5]} />
            <OrbitControls enableZoom={true} enablePan={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#0ea5e9" />
            <MechanicalAssembly />
          </Canvas>
          <div className="absolute bottom-4 right-4 text-xs text-muted-foreground bg-background/50 backdrop-blur-sm px-3 py-2 rounded">
            Click & drag to rotate
          </div>
        </motion.div>
      </div>
    </div>
  );
}
