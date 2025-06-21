import {cn} from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#project"},
];

export const Navbar = () => {
    const [isscrolled,setisscrolled] = useState(false);

    useEffect(() => {
        const handlescroll = () => {
        setisscrolled(window.screenY > 10);
        };

        window.addEventListener("scroll", handlescroll);
        return () => window.removeEventListener("scroll", handlescroll);
    }, []);
    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300", )}></nav>
    );
};