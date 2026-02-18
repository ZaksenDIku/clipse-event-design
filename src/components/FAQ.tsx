import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "Age Limit",
    answer: "21+",
  },
  {
    question: "Dress Code",
    answer:
      "No visible tattoos. An upscale dress code applies. Fashionable, polished attire is required — no casualwear or sportswear. Dress to impress.",
  },
  {
    question: "How much is a table?",
    answer:
      "Contact our social media account @Eclipse.Copenhagen for table reservations and pricing.",
  },
  {
    question: "Lost something?",
    answer:
      "Contact us on Instagram @Eclipse.Copenhagen",
  },
];

const FAQ = () => {
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
    <section id="faq" className="py-32 md:py-44 bg-background">
      <div ref={ref} className="max-w-3xl mx-auto px-6 md:px-12">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-8 font-body">
            Information
          </p>
          <div className="gold-line w-12 mx-auto mb-12" />
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-foreground">
            Frequently Asked <span className="italic text-primary">Questions</span>
          </h2>
        </div>

        <div className="space-y-0 divide-y divide-border/50">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className={`py-8 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <h3 className="font-serif text-lg md:text-xl font-light tracking-wide text-foreground mb-3">
                {faq.question}
              </h3>
              <p className="text-foreground/50 font-body text-base leading-relaxed font-light">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
