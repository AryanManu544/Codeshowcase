// ThemeToggle.jsx
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils"; // Make sure cn is correctly imported and working

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false); // Default to false (light mode)

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        let initialThemeIsDark = false;
        if (storedTheme === "dark") {
            initialThemeIsDark = true;
        } else if (storedTheme === "light") {
            initialThemeIsDark = false;
        } else if (prefersDark) {
            initialThemeIsDark = true;
            localStorage.setItem("theme", "dark"); // Store system preference if no explicit choice
        } else {
            initialThemeIsDark = false;
            localStorage.setItem("theme", "light"); // Default to light
        }

        setIsDarkMode(initialThemeIsDark);
        if (initialThemeIsDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => {
            const newModeIsDark = !prevMode;
            if (newModeIsDark) {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }
            return newModeIsDark;
        });
    };

    return (
       <button
     onClick={toggleTheme}
     className={cn(
         "fixed top-4 right-4 z-[100] p-2 rounded-full transition-all duration-300",
         "bg-transparent hover:bg-transparent",
         "focus:outline-none focus:ring-0"
     )}
     aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
 >
            {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
                <Moon className="h-5 w-5 text-slate-700" /> 
            )}
        </button>
    );
};