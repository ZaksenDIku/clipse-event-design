import { useEffect, useRef, useState } from "react";

const Contact = () => {
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
    <section id="contact" className="py-32 md:py-44 bg-secondary/30">
      <div
        ref={ref}
        className={`max-w-xl mx-auto px-6 md:px-12 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-8 font-body">Contact</p>
          <div className="gold-line w-12 mx-auto mb-12" />
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-foreground">
            Get in <span className="italic text-primary">Touch</span>
          </h2>
        </div>

        <form
          className="space-y-8"
          action="https://formsubmit.co/zakariya.berrhi@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New message from Éclipse Copenhagen" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <div>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              required
              className="w-full bg-transparent border-b border-platinum/20 py-4 text-foreground font-body text-base tracking-wide placeholder:text-foreground/30 focus:outline-none focus:border-primary/60 transition-colors duration-500"
            />
          </div>
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="w-full bg-transparent border-b border-platinum/20 py-4 text-foreground font-body text-base tracking-wide placeholder:text-foreground/30 focus:outline-none focus:border-primary/60 transition-colors duration-500"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              className="w-full bg-transparent border-b border-platinum/20 py-4 text-foreground font-body text-base tracking-wide placeholder:text-foreground/30 focus:outline-none focus:border-primary/60 transition-colors duration-500 resize-none"
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="w-full border border-primary/40 text-primary py-4 text-sm tracking-[0.3em] uppercase font-body hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
