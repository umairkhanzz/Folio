import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import EngineeringApproach from "@/components/sections/EngineeringApproach";
import PerformanceQuality from "@/components/sections/PerformanceQuality";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <EngineeringApproach />
        <PerformanceQuality />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
