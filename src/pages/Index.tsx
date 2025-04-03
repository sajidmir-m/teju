
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AiChatbot from '@/components/AiChatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-dark">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <AiChatbot />
    </div>
  );
};

export default Index;
