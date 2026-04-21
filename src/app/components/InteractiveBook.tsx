import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, GraduationCap, User, BookOpen } from 'lucide-react';
import myimage from '../images/myimage.png';
interface Page {
  id: number;
  title: string;
  icon: any;
  content: JSX.Element;
}

export default function InteractiveBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const pages: Page[] = [
    {
      id: 0,
      title: 'About Me',
      icon: User,
      content: (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
          <div className="flex-shrink-0">
            <img src={myimage} alt="My Image" className="w-48 h-64 lg:w-64 lg:h-64 rounded-xl object-cover shadow-lg" />
          </div>
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-3xl">About Me</h3>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I'm a hybrid professional who bridges the digital and physical worlds. With a strong
              foundation in both software engineering and mechanical design, I bring a unique perspective
              to every project.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My passion lies in creating elegant solutions—whether that's a beautifully architected
              web application or a precision-engineered mechanical assembly. I believe that great
              design transcends medium, and the principles of good engineering apply equally to
              code and CAD.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-accent/5 border border-accent/20 rounded-sm p-4">
                <div className="text-2xl mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-accent/5 border border-accent/20 rounded-sm p-4">
                <div className="text-2xl mb-1">30+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed italic pt-4">
              "Innovation happens at the intersection of disciplines. That's where I thrive."
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: 'Biography',
      icon: BookOpen,
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-3xl">Biography</h3>
          </div>

          <div className="space-y-4">
            <div className="border-l-2 border-accent pl-4">
              <div className="text-sm text-accent mb-2">Early Years</div>
              <p className="text-muted-foreground">
                My journey began with a childhood fascination for how things work. I would spend
                hours dismantling toys and gadgets, trying to understand their inner workings.
                This curiosity naturally led me to pursue both computer science and mechanical
                engineering.
              </p>
            </div>

            <div className="border-l-2 border-accent/50 pl-4">
              <div className="text-sm text-accent mb-2">Professional Evolution</div>
              <p className="text-muted-foreground">
                After graduating, I realized that my dual expertise was my superpower. I started
                working on projects that required both software and hardware knowledge, from
                IoT devices to automated manufacturing systems.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <div className="text-sm text-accent mb-2">Today</div>
              <p className="text-muted-foreground">
                Now, I leverage cutting-edge technologies like React, Next.js, and Django on the
                software side, while designing precision mechanical systems using SolidWorks and
                advanced CAD tools. When I'm not coding or designing, you'll find me building
                DIY projects or contributing to open-source communities.
              </p>
            </div>
          </div>

          <div className="bg-accent/5 border border-accent/20 rounded-sm p-4 mt-6">
            <p className="text-sm text-muted-foreground italic">
              "Every line of code I write and every part I design is a step toward building
              systems that make a real difference in people's lives."
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Education',
      icon: GraduationCap,
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-3xl">Education</h3>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl mb-2">Bachelor of Science in Computer Science</h4>
                  <p className="text-sm text-accent">University of Technology</p>
                </div>
                <div className="text-sm text-muted-foreground">2016 - 2020</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Focused on software engineering, algorithms, and web development. Graduated with honors.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">GPA: 3.8/4.0</span>
                <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">Dean's List</span>
              </div>
            </div>

            <div className="bg-card border border-border rounded-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl mb-2">Bachelor of Science in Mechanical Engineering</h4>
                  <p className="text-sm text-accent">Institute of Engineering</p>
                </div>
                <div className="text-sm text-muted-foreground">2017 - 2021</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Specialized in CAD design, thermodynamics, and manufacturing processes. Capstone project on robotic systems.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">GPA: 3.9/4.0</span>
                <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">Summa Cum Laude</span>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6 mt-6">
            <h4 className="mb-4">Certifications</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-sm bg-accent/5 border border-accent/20 rounded-sm p-3">
                AWS Solutions Architect
              </div>
              <div className="text-sm bg-accent/5 border border-accent/20 rounded-sm p-3">
                SolidWorks Professional
              </div>
              <div className="text-sm bg-accent/5 border border-accent/20 rounded-sm p-3">
                Professional Engineer (PE)
              </div>
              <div className="text-sm bg-accent/5 border border-accent/20 rounded-sm p-3">
                Google Cloud Certified
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setDirection(1);
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (index: number) => {
    setDirection(index > currentPage ? 1 : -1);
    setCurrentPage(index);
  };

  const variants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      rotateY: direction > 0 ? -90 : 90,
      opacity: 0,
    }),
  };

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
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent">Interactive Experience</span>
          </div>
          <h2 className="text-5xl mb-6 tracking-tight">My Story</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click the pages or use the arrows to explore my journey, background, and credentials.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative" style={{ perspective: '2000px' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative min-h-[600px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-card/50 to-card rounded-lg border-2 border-border shadow-2xl"
                   style={{ transform: 'translateZ(-20px)' }} />

              <div className="relative bg-card border-2 border-border rounded-lg shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/50 via-accent to-accent/50" />

                <div className="p-12 min-h-[600px]" style={{ transformStyle: 'preserve-3d' }}>
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={currentPage}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        rotateY: { type: 'spring', stiffness: 100, damping: 20 },
                        opacity: { duration: 0.3 },
                      }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {pages[currentPage].content}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card/95 to-transparent p-8">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={prevPage}
                      disabled={currentPage === 0}
                      className={`flex items-center gap-2 pl-2 pr-3 py-2 rounded-sm transition-all ${
                        currentPage === 0
                          ? 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                          : 'bg-accent text-accent-foreground hover:bg-accent/90'
                      }`}
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Previous
                    </button>

                    <div className="flex items-center gap-3">
                      {pages.map((page, index) => (
                        <button
                          key={page.id}
                          onClick={() => goToPage(index)}
                          className={`group relative transition-all ${
                            currentPage === index ? 'scale-110' : 'scale-100 hover:scale-105'
                          }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                              currentPage === index
                                ? 'bg-accent text-accent-foreground'
                                : 'bg-card border border-border hover:border-accent'
                            }`}
                          >
                            <page.icon className="w-5 h-5" />
                          </div>
                          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            <div className="bg-background/90 backdrop-blur-sm border border-border rounded px-2 py-1 text-xs">
                              {page.title}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={nextPage}
                      disabled={currentPage === pages.length - 1}
                      className={`flex items-center gap-2 pl-2 pr-3 py-2 rounded-sm transition-all ${
                        currentPage === pages.length - 1
                          ? 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                          : 'bg-accent text-accent-foreground hover:bg-accent/90'
                      }`}
                    >
                      Next
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-2 -right-2 w-full h-full bg-accent/5 rounded-lg border border-accent/20 -z-10"
                   style={{ transform: 'translateZ(-40px)' }} />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-sm text-muted-foreground">
              Page {currentPage + 1} of {pages.length} • {pages[currentPage].title}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
