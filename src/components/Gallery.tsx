import { useEffect, useRef, useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const Gallery = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="py-32 md:py-44 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`text-center mb-20 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-8 font-body">Gallery</p>
          <div className="gold-line w-12 mx-auto mb-12" />
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-foreground">
            Moments of <span className="italic text-primary">Brilliance</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {images.map((src, i) => (
            <div
              key={i}
              className={`aspect-square overflow-hidden transition-all duration-1000 ${
                visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <img
                src={src}
                alt={`Éclipse Copenhagen event ${i + 1}`}
                className="w-full h-full object-cover gallery-hover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
