import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
