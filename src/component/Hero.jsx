import React, { useState } from "react";
import { Nav } from "./Nav";
import { Service } from "./Service";
import AboutUs from "./AboutUs";
import BusinessHero from "./Banner";
import TeamSection from "./Team";
import Testimonials from "./Testm";
import VideoPresentation from "./VideoP";
import NewsArticles from "./NewsArticles";
import Footer from "./Footer";

export function Hero() {
    const [dark, setDark] = useState(false);

    const handleDarkMode = () => {
        setDark(!dark);
    };

    return (
        <>
            <div
                className="hero-cover bg-cover bg-center w-full h-screen text-white dark:text-white"
                style={{ backgroundImage: `url('./hero-bg.jpg')` }}
            >
                <Nav mode={dark} handleDarkMode={handleDarkMode} />

                <div className="w-3/4 h-full mx-auto flex flex-col justify-center">
                    <ul className="list-disc ml-5 text-amber-400 uppercase text-sm">
                        <li>Business made easy</li>
                    </ul>
                    <h1 className="font-bold text-5xl md:text-6xl w-full md:w-7/12 mt-4 leading-tight">
                        Reliably guiding your business to success
                    </h1>
                    <p className="w-full md:w-5/12 mt-6 text-gray-100 dark:text-gray-300">
                        Take your business to the next level with our business idea management tools and expert sales guidance.
                    </p>
                    <div className="flex gap-6 mt-7">
                        <button className="bg-amber-400 hover:bg-amber-500 text-white w-40 h-10 rounded-sm uppercase text-sm shadow">
                            Discover More
                        </button>
                        <a href="/" className="uppercase text-sm underline hover:text-amber-400 transition-colors">
                            Get a Quote
                        </a>
                    </div>
                </div>
            </div>

            <Service mode={dark} />
            <AboutUs mode={dark} />
            <BusinessHero mode={dark} />
            <TeamSection mode={dark} />
            <Testimonials mode={dark} />
            <VideoPresentation mode={dark} />
            <NewsArticles mode={dark} />
            <Footer mode={dark} />
        </>
    );
}
