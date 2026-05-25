import { FormEvent, useEffect, useRef, useState } from "react";

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "fallback" | "error">("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const mailto = new URL("mailto:zakariya.berrhi@gmail.com");
    mailto.searchParams.set("subject", "New message from Éclipse Copenhagen");
    mailto.searchParams.set(
      "body",
      [`Name: ${name}`, `Email: ${email}`, "", message].join("\n"),
    );

    try {
      const response = await fetch("https://formsubmit.co/ajax/zakariya.berrhi@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Message could not be sent");
      }

      form.reset();
      setStatus("sent");
    } catch {
      window.location.href = mailto.toString();
      setStatus("fallback");
    }
  };

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
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_subject" value="New message from Éclipse Copenhagen" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" />
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
              disabled={status === "sending"}
              className="w-full border border-primary/40 text-primary py-4 text-sm tracking-[0.3em] uppercase font-body hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </div>
          {status === "sent" && (
            <p className="text-center text-sm tracking-wide text-primary">
              Your message has been sent.
            </p>
          )}
          {status === "fallback" && (
            <p className="text-center text-sm tracking-wide text-primary">
              Your email app has been opened with the message ready to send.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm tracking-wide text-destructive">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
