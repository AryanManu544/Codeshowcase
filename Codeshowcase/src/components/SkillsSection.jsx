import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // Frontend
    { name: "HTML/CSS", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },

    // Backend
    { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Backend" },
    { name: "MongoDB", category: "Backend" },

    // Tools
    { name: "Git/GitHub", category: "Tools" },
    { name: "Docker", category: "Tools" },
    { name: "Figma", category: "Tools" },
    { name: "VS Code", category: "Tools" },

    //AI Skills
    { name: "Numpy", category: "AI" },
    { name: "Pandas", category: "AI" },
    { name: "Matplotlib", category: "AI" },
    { name: "Seaborn", category: "AI" },
    { name: "Linear Regression", category: "AI" },
    { name: "Classification", category: "AI" },
];

const categories = ["All", "Frontend", "Backend", "Tools", "AI"];

export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [isOpen, setIsOpen] = useState(true);

    const handleCategoryClick = (category) => {
        if (activeCategory === category) {
            setIsOpen(!isOpen);
        } else {
            setActiveCategory(category);
            setIsOpen(true);
        }
    };

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "All" || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key}
                            onClick={() => handleCategoryClick(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105",
                                activeCategory === category && isOpen 
                                    ? "bg-primary text-primary-foreground shadow-lg" 
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className={cn(
                    "transition-all duration-500 ease-in-out overflow-hidden",
                    isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                )}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredSkills.map((skill, key) => (
                            <div
                                key={key} 
                                className="bg-card p-6 rounded-lg shadow-lg card-hover transform transition-all duration-300"
                            >
                                <div className="text-left mb-4">
                                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                                    <span className="text-sm text-muted-foreground">{skill.category}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};