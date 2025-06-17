import React, { useEffect, useState } from "react";

export function Nav({ mode, handleDarkMode }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled
                ? mode
                    ? "bg-black text-white shadow-md"
                    : "bg-gray-100 text-black shadow-md"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center uppercase text-sm">

                <div className="flex flex-col">
                    <h3 className={`text-xl font-bold `}>
                        Advisor
                    </h3>
                    <span className={`text-xs tracking-wide `}>
                        Bigger · Better
                    </span>
                </div>

                <div className={`hidden md:flex gap-8 text-lg `}>
                    <a href="/">Home</a>
                    <a href="/">Page</a>
                    <a href="/">Services</a>
                    <a href="/">Projects</a>
                    <a href="/">Blog</a>
                    <a href="/">Contact</a>
                </div>

                <div className="flex items-center gap-4">
                    <button aria-label="Search">
                        <i className={`fa-solid fa-magnifying-glass text-lg `}></i>
                    </button>

                    <button className="bg-amber-400 text-white hover:bg-amber-500 w-24 h-8 rounded-sm text-xs uppercase shadow">
                        Free Quote
                    </button>

                    <button
                        onClick={handleDarkMode}
                        className={`w-24 h-9 rounded-full shadow-md text-sm font-semibold transition-colors duration-300
                              ${mode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-yellow-400 text-black hover:bg-yellow-500"}
                          `}
                    >
                        {mode ? "Light Mode" : "Dark Mode"}
                    </button>

                </div>
            </div>
        </nav>
    );
}
