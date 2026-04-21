import { motion } from 'motion/react';
import { Code2, Wrench, GraduationCap, Award } from 'lucide-react';

export default function AboutMe() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Developer',
      description: 'Specialized in building scalable web applications with modern frameworks and best practices.',
    },
    {
      icon: Wrench,
      title: 'Mechanical Engineer',
      description: 'Expert in CAD design, FEA analysis, and bringing complex mechanical systems to life.',
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and methodologies to stay at the cutting edge.',
    },
    {
      icon: Award,
      title: 'Problem Solver',
      description: 'Passionate about tackling complex challenges with innovative and efficient solutions.',
    },
  ];

  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 tracking-tight">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              I'm a hybrid professional who bridges the digital and physical worlds. With a strong
              foundation in both software engineering and mechanical design, I bring a unique perspective
              to every project.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              My journey began with a fascination for how things work—both in code and in mechanics.
              Today, I leverage cutting-edge technologies like React, Next.js, and Django on the software
              side, while designing precision mechanical systems using SolidWorks and advanced CAD tools.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding or designing, you'll find me building DIY projects, exploring new
              frameworks, or contributing to open-source communities.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-sm p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <item.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
