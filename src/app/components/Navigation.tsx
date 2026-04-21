export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-sm"></div>
          <span className="tracking-tight">PORTFOLIO</span>
        </div>

        <div className="hidden lg:flex gap-6">
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-accent transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('development')}
            className="hover:text-accent transition-colors"
          >
            Development
          </button>
          <button
            onClick={() => scrollToSection('engineering')}
            className="hover:text-accent transition-colors"
          >
            Engineering
          </button>
          <button
            onClick={() => scrollToSection('diy')}
            className="hover:text-accent transition-colors"
          >
            DIY
          </button>
          <button
            onClick={() => scrollToSection('future')}
            className="hover:text-accent transition-colors"
          >
            Future Plans
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-accent text-accent-foreground px-4 py-2 rounded-sm hover:bg-accent/90 transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
