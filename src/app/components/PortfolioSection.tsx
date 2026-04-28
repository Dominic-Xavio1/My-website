import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Box, Hammer, X, ExternalLink, Github } from 'lucide-react';
import sms from "../images/sms.png";
interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
}

const projects = {
  development: [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack Django application with bootstrap integration',
      tech: ['Django', 'html', 'sql', 'bootstrap'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    },
    {
      title: 'School Management System',
      description: 'Next.js for fast development with redis and WebSocket updates',
      tech: ['Next.js', 'React', 'WebSocket', 'PostgreSQL', 'Redis','Tailwindcss'],
      image: sms
    },
    {
      title: 'AI Content Generator',
      description: 'Python-based content generation with GPT integration',
      tech: ['Python', 'FastAPI', 'OpenAI', 'React'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80'
    }
  ],
  engineering: [
    {
      title: 'Oil Pump Jack Gearbox Design',
      description: 'Detailed gearbox design for an oil pump jack, including stress analysis and optimization',
      tech: ['SolidWorks', 'FEA', 'Technical Drawing'],
      image: 'https://img-new.cgtrader.com/items/4292968/24f4faca67/rotary-piston-oil-pump-solidworks-tutorial-3d-model-24f4faca67.webp'
    },
    {
      title: 'Cutting Machine Fixture Design',
      description: 'Custom fixture for CNC cutting machine to ensure part stability and precision',
      tech: ['SolidWorks', 'Manufacturing', '3D Printing'],
      image: 'https://i.ytimg.com/vi/hMUDfsbfWDQ/maxresdefault.jpg'
    },
    {
      title: 'Simulated Drone Design',
      description: 'Quadcopter design with kinematic analysis and control system simulation',
      tech: ['SolidWorks', 'Kinematics', 'Control Systems'],
      image: 'https://content.instructables.com/FNF/8SGC/LRT85QKC/FNF8SGCLRT85QKC.jpg?frame=true&width=720&height=1024&fit=bounds&crop=3:2'
    }
  ],
  diy: [
    {
      title: 'Street Light Control System',
      description: 'Arduino-based street light controller with light and motion sensors',
      tech: ['CAD', 'Electronics', 'Firmware'],
      image: 'https://i.ytimg.com/vi/bIA72PQXw5Y/hqdefault.jpg'
    },
    {
      title: 'Propellant Rocket Engine',
      description: 'Small-scale liquid-fueled rocket engine for educational purposes',
      tech: ['Physics', 'Chemistry', 'Electronics'],  
      image: 'https://i0.wp.com/cdn.makezine.com/uploads/2013/09/m35_ss_sugarrocket_opener.jpg?ssl=1'
    },
    {
      title: 'CNC Router Build',
      description: 'Custom-built CNC router for woodworking',
      tech: ['Mechanical Design', 'Electronics', 'Firmware'],
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80'
    }
  ]
};

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      layoutId={`project-${project.title}`}
      onClick={onClick}
      className="group cursor-pointer bg-card border border-border rounded-sm overflow-hidden"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="mb-2">{project.title}</h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map(tech => (
            <span
              key={tech}
              className="text-xs px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-6"
      onClick={onClose}
    >
      <motion.div
        layoutId={`project-${project.title}`}
        className="bg-card border border-border rounded-sm max-w-4xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-96">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-sm hover:bg-accent transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8">
          <h2 className="mb-4">{project.title}</h2>
          <p className="text-muted-foreground mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map(tech => (
              <span
                key={tech}
                className="px-4 py-2 bg-accent/10 text-accent border border-accent/20 rounded-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-sm transition-colors"
              onClick={()=>{
  if(project.title === 'E-Commerce Platform'){
    window.open('https://rv9n64-8000.csb.app', '_blank');
  }
  else if(project.title === 'School Management System'){
    window.open('https://asyvcommunity.vercel.app/', '_blank');
  }
              }}
            >
              <ExternalLink className="w-4 h-4" />
              View Live
            </button>
            <button className="flex items-center gap-2 border border-border hover:border-accent hover:text-accent px-6 py-3 rounded-sm transition-colors"
            onClick={()=>{
              if(project.title==="E-Commerce Platform"){
                window.open('https://codesandbox.io/p/devbox/djangocar-project-rv9n64', '_blank');
              }
              else if(project.title === 'School Management System'){
                window.open('https://github.com/Dominic-Xavio1/asyv.org', '_blank');
              }
            }}
            >
              <Github className="w-4 h-4" />
              Source Code
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="development" className="py-32 bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <Code className="w-12 h-12 text-accent" />
            <div>
              <h2 className="text-4xl tracking-tight">Software Engineering</h2>
              <p className="text-muted-foreground">Next.js, React, Django & PostgreSQL</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.development.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="engineering" className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <Box className="w-12 h-12 text-accent" />
            <div>
              <h2 className="text-4xl tracking-tight">CAD & Design</h2>
              <p className="text-muted-foreground">SolidWorks projects & mechanical precision</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.engineering.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="diy" className="py-32 bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <Hammer className="w-12 h-12 text-accent" />
            <div>
              <h2 className="text-4xl tracking-tight">DIY Projects</h2>
              <p className="text-muted-foreground">Physical builds & enthusiast projects</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.diy.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
