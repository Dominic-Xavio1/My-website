import { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Database, Layout, Server } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Tech {
  name: string;
  icon: LucideIcon;
  description: string;
  color: string;
}

const techStack: Tech[] = [
  {
    name: 'Python',
    icon: Code2,
    description: 'Backend development, data processing, automation',
    color: '#0ea5e9'
  },
  {
    name: 'JavaScript/TypeScript',
    icon: Code2,
    description: 'Full-stack development, type-safe applications',
    color: '#0ea5e9'
  },
  {
    name: 'React',
    icon: Layout,
    description: 'Modern UI development, component architecture',
    color: '#0ea5e9'
  },
  {
    name: 'Next.js',
    icon: Server,
    description: 'Server-side rendering, static generation, API routes',
    color: '#0ea5e9'
  },
  {
    name: 'Django',
    icon: Server,
    description: 'Robust backend APIs, ORM, authentication',
    color: '#0ea5e9'
  },
  {
    name: 'PostgreSQL',
    icon: Database,
    description: 'Relational database design, optimization, queries',
    color: '#0ea5e9'
  }
];

function TechCard({ tech, index }: { tech: Tech; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-card border border-border rounded-sm p-6 cursor-pointer overflow-hidden group"
    >
      <div className="relative z-10">
        <tech.icon className="w-12 h-12 mb-4" style={{ color: tech.color }} />
        <h3 className="mb-2">{tech.name}</h3>
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            height: isHovered ? 'auto' : 0
          }}
          className="text-sm text-muted-foreground overflow-hidden"
        >
          {tech.description}
        </motion.p>
      </div>
      <motion.div
        className="absolute inset-0 bg-accent/5"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 tracking-tight">Core Stack</h2>
          <p className="text-muted-foreground text-lg">
            Technologies I use to build exceptional products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
