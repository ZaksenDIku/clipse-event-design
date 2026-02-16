import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Private Events",
    description:
      "Intimate gatherings designed for the discerning few. From secret suppers to members-only soirées, each event is a masterpiece of atmosphere and exclusivity.",
  },
  {
    title: "Corporate Experiences",
    description:
      "Elevate your brand with bespoke corporate events that command attention. We transform business occasions into unforgettable experiences.",
  },
  {
    title: "Luxury Celebrations",
    description:
      "Milestone moments deserve extraordinary settings. We craft celebrations that reflect the magnitude of your most important occasions.",
  },
];

const Services = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-32 md:py-44 bg-secondary/30">
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12">
        <div className={`text-center mb-20 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-8 font-body">Services</p>
          <div className="gold-line w-12 mx-auto mb-12" />
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-foreground">
            Our <span className="italic text-primary">Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border/30">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`bg-background p-10 md:p-14 group hover:bg-secondary/50 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <span className="text-xs tracking-[0.3em] text-primary/60 font-body">0{i + 1}</span>
              <h3 className="font-serif text-xl md:text-2xl font-light text-foreground mt-4 mb-6 group-hover:text-primary transition-colors duration-500">
                {service.title}
              </h3>
              <div className="gold-line w-8 mb-6 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-foreground/50 font-body text-base leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
