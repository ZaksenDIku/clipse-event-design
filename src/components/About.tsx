import { useEffect, useRef, useState } from "react";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 md:py-44 bg-background">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-6 md:px-12 text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-8 font-body">About</p>
        <div className="gold-line w-12 mx-auto mb-12" />
        <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-foreground mb-10">
          Where Exclusivity Meets <span className="italic text-primary">Artistry</span>
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-foreground/60 font-body font-light">
          Éclipse Copenhagen is not an event company — it is an invitation into a world where every 
          detail is considered, every moment is intentional, and every guest is chosen. We curate 
          experiences that exist beyond the ordinary, blending Scandinavian minimalism with 
          uncompromising luxury.
        </p>
        <div className="gold-line w-12 mx-auto mt-12" />
      </div>
    </section>
  );
};

export default About;
