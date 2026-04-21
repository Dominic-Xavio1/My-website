import Navigation from './components/Navigation';
import Hero3DAlternative from './components/Hero3DAlternative';
import InteractiveBook from './components/InteractiveBook';
import TechStack from './components/TechStack';
import PortfolioSection from './components/PortfolioSection';
import CVDownload from './components/CVDownload';
import FuturePlans from './components/FuturePlans';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import {useEffect} from 'react';
import myIcon from './images/myimage.png';
export default function App() {
    useEffect(() => {
    // 1. Set the document title
    document.title = "Dominique Savio";

    // 2. Find or create the favicon link element
    let link = document.querySelector("link[rel~='icon']");
    
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }

    // 3. Set the href to your imported image
    link.href = myIcon;
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero3DAlternative />
      <InteractiveBook />
      <TechStack />
      <PortfolioSection />
      <CVDownload />
      <FuturePlans />
      <ContactForm />
      <Footer />
    </div>
  );
}