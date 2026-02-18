const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(11_50%_65%/0.06)_0%,transparent_70%)]" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Gold accent line */}
        <div className="gold-line w-24 mx-auto mb-12 opacity-0 animate-fade-in" />
        
        {/* Subheading */}
        <div className="opacity-0 animate-fade-up mb-10" style={{ animationDelay: "0.3s" }}>
          <p className="font-serif text-3xl md:text-5xl tracking-[0.3em] text-primary">ÉCLIPSE</p>
          <p className="text-[0.55rem] md:text-[0.7rem] tracking-[0.3em] uppercase text-foreground/85 mt-1" style={{ fontFamily: "'Cinzel', serif" }}>COPENHAGEN</p>
        </div>

        {/* Main heading */}
        <h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-wide text-foreground opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          Curating Unforgettable
          <br />
          <span className="italic text-primary">Nights</span> in Copenhagen.
        </h1>

        {/* Gold line below */}
        <div
          className="gold-line w-16 mx-auto mt-12 mb-12 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        />

        {/* CTA */}
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "1s" }}>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-primary/40 text-primary px-10 py-4 text-sm tracking-[0.3em] uppercase font-body hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Request Invitation
          </button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
