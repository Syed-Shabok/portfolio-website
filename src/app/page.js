import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import ProjectsGrid from '@/components/ProjectsGrid';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import GSAPReveal from '@/components/GSAPReveal';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <GSAPReveal><About /></GSAPReveal>
        <GSAPReveal><Skills /></GSAPReveal>
        <GSAPReveal><ProjectsGrid /></GSAPReveal>
        <GSAPReveal><Education /></GSAPReveal>
        <GSAPReveal><Contact /></GSAPReveal>
      </main>
      <Footer />
    </>
  );
}
