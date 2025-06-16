import React from "react";
import { Nav } from "./Nav";

export function Hero() {
    return (
        <>
            <div className="hero-cover bg-cover bg-[url(./hero-bg.jpg)] w-full h-dvh">
                <Nav />
                <div className=" m-auto  w-3/4 h-full content-center">
                    <ul className="list-disc ml-5">
                        <li className="uppercase text-amber-400 ">Business make easy</li>
                    </ul>
                    <h1 className="font-bold text-6xl w-7/12 mt-3">Reliably guiding your business to success</h1>
                    <p className="w-5/12 mt-8">Take your business to the next level with our sales agency for bussiness idea management tools for you</p>
                    <div className="flex gap-10 mt-7">
                        <div>
                            <button className="text-white bg-amber-400 w-40 uppercase h-8 rounded-sm text-sm">discover more</button>
                        </div>
                        <div>
                            <a href="/" className="uppercase text-d underline " >get a quote</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}