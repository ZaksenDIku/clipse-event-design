const Footer = () => (
  <footer className="py-16 bg-background border-t border-border">
    <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
      <p className="font-serif text-lg tracking-[0.3em] text-primary mb-4">ÉCLIPSE</p>
      <p className="text-xs tracking-[0.2em] uppercase text-foreground/30 font-body">
        Copenhagen · By Invitation Only
      </p>
      <div className="gold-line w-8 mx-auto mt-8 mb-8" />
      <p className="text-xs text-foreground/20 font-body">
        © {new Date().getFullYear()} Éclipse Copenhagen. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
