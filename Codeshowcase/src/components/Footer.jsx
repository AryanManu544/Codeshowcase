import { ArrowUp } from "lucide-react";

export const Footer = () => (
  <footer className="py-8 bg-background border-t border-border text-center">
    <p className="text-sm text-muted-foreground mb-4">
      &copy; {new Date().getFullYear()} Aryan Manu, All rights reserved
    </p>
    <a
      href="#Hero"
      className="inline-block p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </a>
  </footer>
);
