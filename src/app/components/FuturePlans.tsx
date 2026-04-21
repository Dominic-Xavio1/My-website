import { motion } from 'motion/react';
import { Rocket, Layers, Zap, Globe, Cpu, Box } from 'lucide-react';

export default function FuturePlans() {
  const plans = [
    {
      icon: Layers,
      category: 'Software Development',
      title: 'Advanced Full-Stack Architecture',
      description: 'Mastering microservices, serverless architecture, and cloud-native applications with AWS and Azure.',
      timeline: '2026 Q2',
      color: '#0ea5e9',
    },
    {
      icon: Cpu,
      category: 'AI & Machine Learning',
      title: 'AI-Powered Applications',
      description: 'Building intelligent systems using GPT-4, computer vision, and machine learning frameworks.',
      timeline: '2026 Q3',
      color: '#0ea5e9',
    },
    {
      icon: Box,
      category: '3D Design',
      title: 'Advanced CAD & Simulation',
      description: 'Exploring parametric design, generative design, and advanced FEA/CFD simulations.',
      timeline: '2026 Q4',
      color: '#0ea5e9',
    },
    {
      icon: Globe,
      category: 'Software Development',
      title: 'Open Source Contributions',
      description: 'Contributing to major open-source projects and building developer tools for the community.',
      timeline: '2027 Q1',
      color: '#0ea5e9',
    },
    {
      icon: Zap,
      category: '3D Design',
      title: 'Robotics & Automation',
      description: 'Designing and building autonomous robotic systems with integrated software control.',
      timeline: '2027 Q2',
      color: '#0ea5e9',
    },
    {
      icon: Rocket,
      category: 'Hybrid Projects',
      title: 'IoT & Smart Systems',
      description: 'Creating connected devices that bridge physical hardware with cloud-based software platforms.',
      timeline: '2027 Q3',
      color: '#0ea5e9',
    },
  ];

  return (
    <section id="future" className="py-32 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Rocket className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent">Future Roadmap</span>
          </div>
          <h2 className="text-5xl mb-6 tracking-tight">Future Plans & Vision</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My journey doesn't stop here. I'm constantly evolving, learning, and pushing boundaries
            in both software development and 3D design. Here's what's on the horizon.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent hidden lg:block" />

          <div className="space-y-12">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-card border border-border rounded-sm p-8 relative">
                    <div className="absolute top-4 right-4 text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {plan.timeline}
                    </div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full flex-shrink-0">
                        <plan.icon className="w-7 h-7 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-muted-foreground mb-2">{plan.category}</div>
                        <h3 className="text-2xl mb-3">{plan.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center w-12 h-12 bg-background border-2 border-accent rounded-full flex-shrink-0 relative z-10">
                  <div className="w-4 h-4 bg-accent rounded-full" />
                </div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-sm p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl mb-4">Long-Term Vision</h3>
            <p className="text-lg text-muted-foreground mb-6">
              My ultimate goal is to build a studio that seamlessly integrates software engineering
              and mechanical design, creating products that push the boundaries of what's possible
              in both digital and physical spaces.
            </p>
            <p className="text-muted-foreground">
              Whether it's developing AI-powered design tools, building autonomous systems, or
              creating the next generation of smart devices, I'm committed to innovation that makes
              a real impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
