import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <button onClick={() => scrollTo("hero")} className="font-serif text-xl tracking-[0.3em] text-primary">
          ÉCLIPSE
        </button>
        <div className="hidden md:flex items-center gap-10">
          {["about", "services", "gallery", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm tracking-[0.2em] uppercase text-foreground/70 hover:text-primary transition-colors duration-300 font-body"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
