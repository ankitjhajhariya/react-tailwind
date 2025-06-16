import React from "react";

export function Nav() {
    return (
        <>
            <div className="nav flex justify-around items-center uppercase">
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGHpQVJYUfX4AEUoz0aobhJQ196BAtsFvTMA&s" alt="" /> */}
                <div className="w-40 uppercase "><h3 className="text-2xl font-bold ml-1.5">Advisor</h3><h5>bigger . better</h5></div>
                <div className="flex gap-10">
                    <div><a href="/">Home</a></div>
                    <div><a href="">Page</a></div>
                    <div><a href="/">services</a></div>
                    <div><a href="/">projects</a></div>
                    <div><a href="/">blog</a></div>
                    <div><a href="/">contact</a></div>
                </div>
                <div className="flex gap-3">
                    <div className="self-center"><i class="fa-solid fa-magnifying-glass"></i></div>
                    <div ><button className="text-white bg-amber-400 w-24 uppercase h-8 rounded-sm text-sm">free quote</button></div>
                </div>
            </div>
        </>
    );
}