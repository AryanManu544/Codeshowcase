import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { CosmicLightBackground } from "../components/CosmixLightBackground";
import { useState, useEffect } from "react";

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDarkMode(theme === "dark");

    const observer = new MutationObserver(() => {
      const hasDarkClass = document.documentElement.classList.contains("dark");
      setIsDarkMode(hasDarkClass);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => observer.disconnect();
  }, []);

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">  
            {/* Theme Toggle */}
            <ThemeToggle/>
            
            {/* Background Effects - Conditional based on theme */}
            {isDarkMode ? <StarBackground/> : <CosmicLightBackground/>}
            
            {/* Navbar */}

            {/* Main Content */}
            
            {/* Footer */}
        </div>
    );
};