import { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Database, Globe, Layout, Leaf,Code,FileCode, Palette, Server,Share2,Shield, Terminal, Wind, } from 'lucide-react';
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
    description: 'Versatile language used for backend development, automation, and AI systems. Experienced in building high-performance APIs with FastAPI, integrating machine learning models, and developing simulation-based and 2D game logic.',
    color: '#0ea5e9'
  },
  {
    name: 'JavaScript/TypeScript',
    icon: Code2,
    description: 'Core language for modern web development, used across both frontend and backend. TypeScript adds strong typing for building scalable, maintainable, and error-resistant applications.',
    color: '#0ea5e9'
  },
  {
    name: 'React',
    icon: Layout,
    description: 'Component-based frontend library for building dynamic and responsive user interfaces. Skilled in state management, reusable UI architecture, and optimizing rendering performance.',
    color: '#0ea5e9'
  },
  {
    name: 'Next.js',
    icon: Server,
    description: 'Full-stack React framework enabling server-side rendering, static site generation, and API routes. Used to build high-performance, SEO-friendly, and production-ready applications.',
    color: '#0ea5e9'
  },
  {
    name: 'Express.js',
    icon: Server,
    description: 'Minimal and flexible Node.js framework for building robust RESTful APIs. Experienced in middleware design, authentication systems, and structuring scalable backend architectures.',
    color: '#0ea5e9'
  },
  {
    name: 'PostgreSQL',
    icon: Database,
    description: 'Advanced relational database system used for designing structured schemas, writing complex queries, and optimizing performance through indexing and normalization.',
    color: '#0ea5e9'
  },
  {
    name: 'MongoDB',
    icon: Leaf,
    description: 'NoSQL document database for flexible and scalable data storage. Skilled in schema design, aggregation pipelines, indexing strategies, and handling large-scale unstructured data.',
    color: '#10b981' 
  },
  {
    name: 'Django',
    icon: Terminal,
    description: 'High-level Python web framework that promotes rapid development and clean architecture. Experienced with ORM, authentication systems, admin dashboards, and REST API integration.',
    color: '#22e399' 
  },
  {
    name: 'HTML5',
    icon: Globe,
    description: 'Foundation of web development used to create semantic, accessible, and well-structured web pages following modern web standards.',
    color: '#ea580c' 
  },
  {
    name: 'CSS3',
    icon: Palette,
    description: 'Styling language used to design responsive layouts, animations, and visually engaging interfaces, including Flexbox, Grid, and modern UI techniques.',
    color: '#2563eb'
  },
  {
    name: 'Tailwind CSS',
    icon: Wind,
    description: 'Utility-first CSS framework that enables rapid UI development with consistent design systems, responsive layouts, and highly customizable styling.',
    color: '#06b6d4'
  },
  {
    name: 'Node.js',
    icon: Server,
    description: 'JavaScript runtime for building fast and scalable server-side applications using event-driven, non-blocking architecture.',
    color: '#15803d'
  },
  {
    name: 'PG',
    icon: Share2,
    description: 'Lightweight PostgreSQL client for Node.js used to manage database connections, execute queries, and handle transactions efficiently in backend systems.',
    color: '#334155'
  },
  {
    name: 'Java',
    icon: FileCode,
    description: 'Object-oriented programming language used for building robust backend systems and Android applications with strong performance and cross-platform capabilities.',
    color: '#334155'
  },
  {
    name: 'C++',
    icon: Code,
    description: 'High-performance programming language used for system-level development, simulations, and embedded systems requiring speed and memory control.',
    color: '#334155'
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
