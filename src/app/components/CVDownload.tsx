import { motion } from 'motion/react';
import { Download, FileText, Briefcase, Star } from 'lucide-react';

export default function CVDownload() {
  const handleDownload = () => {
    const cvContent = `
CURRICULUM VITAE

FULL-STACK DEVELOPER & MECHANICAL DESIGN ENGINEER

================================================================================

PROFESSIONAL SUMMARY
-------------------
Hybrid professional specializing in both software engineering and mechanical
design. Expert in building scalable web applications and precision-engineered
mechanical systems.

TECHNICAL SKILLS
--------------
Software Development:
• Languages: Python, JavaScript/TypeScript
• Frontend: React, Next.js, Tailwind CSS
• Backend: Django, PostgreSQL, REST APIs
• Tools: Git, Docker, CI/CD

Mechanical Engineering:
• CAD Software: SolidWorks, AutoCAD
• Analysis: FEA, CFD
• Manufacturing: 3D Printing, CNC
• Technical Drawing & GD&T

EXPERIENCE
----------
Full-Stack Developer
• Developed enterprise web applications using Next.js and Django
• Implemented responsive UIs with React and Tailwind CSS
• Designed and optimized PostgreSQL databases
• Integrated third-party APIs and payment systems

Mechanical Design Engineer
• Created precision mechanical assemblies in SolidWorks
• Performed FEA analysis for structural validation
• Developed manufacturing documentation and technical drawings
• Designed custom fixtures and automation systems

PROJECTS
--------
• E-Commerce Platform - Full-stack Next.js with Stripe integration
• Real-time Dashboard - Django REST API with WebSocket updates
• AI Content Generator - Python-based with GPT integration
• Precision Gearbox Assembly - Multi-stage reduction system
• Automated Test Fixture - Custom quality testing solution
• Robotic Arm Design - 6-axis precision control system

EDUCATION
---------
Bachelor of Science in Mechanical Engineering
Bachelor of Science in Computer Science

CERTIFICATIONS
-------------
• Professional Engineer (PE)
• AWS Certified Solutions Architect
• SolidWorks Professional Certification

================================================================================

Contact: contact@example.com
Portfolio: https://portfolio.example.com
GitHub: https://github.com/username
LinkedIn: https://linkedin.com/in/username
    `;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV_Portfolio.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const stats = [
    { icon: Briefcase, value: '5+', label: 'Years Experience' },
    { icon: Star, value: '30+', label: 'Projects Completed' },
    { icon: FileText, value: '10+', label: 'Certifications' },
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 tracking-tight">Professional Resume</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download my complete CV to see my full professional experience, education, and achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-sm p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-card to-card/50 border border-border rounded-sm p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
            <div className="relative z-10">
              <FileText className="w-20 h-20 text-accent mx-auto mb-6" />
              <h3 className="text-3xl mb-4">Curriculum Vitae</h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Complete overview of my professional journey, technical skills, projects, and educational background.
              </p>
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-4 rounded-sm transition-all inline-flex items-center gap-3 text-lg"
              >
                <Download className="w-6 h-6" />
                Download CV
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
