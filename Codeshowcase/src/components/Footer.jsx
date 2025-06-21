import { ArrowUp } from "lucide-react";

export const Footer = () => (
  <footer className="py-8 bg-card border-t-2 border-border text-center relative z-10">
    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 font-medium">
      &copy; {new Date().getFullYear()} Aryan Manu, All rights reserved
    </p>
    <a
      href="#Hero"
      className="inline-block p-2 rounded-full bg-primary/20 hover:bg-primary/30 text-primary transition-all duration-300 hover:scale-110 border border-primary/20"
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </a>
  </footer>
);