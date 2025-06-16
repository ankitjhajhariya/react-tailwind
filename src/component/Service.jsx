import React from "react";

export function Service() {
    return (
        <>
            <div className="service-cover w-full  dark:bg-gray-900">
                <div className=" m-auto  w-3/4 justify-items-center text-center pt-10">
                    <ul className="list-disc ml-5">
                        <li className="uppercase text-amber-300 justify-center ">Our dedicated services</li>
                    </ul>
                    <h1 className="text-3xl font-bold mt-2">Service We Provide</h1>
                    <div className="flex gap-3.5 mt-7">
                        <div className="border-2 rounded-lg justify-items-center ">
                            <div className="w-12 m-8 "><img src="./SP.png" alt="" className="invert brightness-0" /></div>
                            <h3 className="text-xl font-medium">Strategic Planning</h3>
                            <p className="text-gray-400 w-8/12 mb-6">We help a business generate new product ideas with intelligence.</p>
                            <div className="m-2 w-full">
                                <hr />
                                <a href="/">READ MORE</a>
                            </div>

                        </div>
                        <div className="border-2 rounded-lg justify-items-center ">
                            <div className="w-12 m-8 ">
                                <img src="./MA.png" alt="" className="invert brightness-0" />
                            </div>

                            <h3 className="text-xl font-medium">Market Analysis</h3>
                            <p className="text-gray-400 w-8/12 mb-6">We help a business generate new product ideas with intelligence.</p>
                            <div className="m-2 w-full">
                                <hr />
                                <a href="/">READ MORE</a>
                            </div>
                        </div>
                        <div className="border-2 rounded-lg justify-items-center ">
                            <div className="w-12 m-8 "><img src="./FP.png" alt="" className="invert brightness-0" /></div>
                            <h3 className="text-xl font-medium">Finance Planning</h3>
                            <p className="text-gray-400 w-8/12 mb-6">We help a business generate new product ideas with intelligence.</p>
                            <div className="m-2 w-full">
                                <hr />
                                <a href="/">READ MORE</a>
                            </div>
                        </div>
                        <div className="border-2 rounded-lg justify-items-center ">
                            <div className="w-12 m-8 "><img src="./II.png" alt="" className="invert brightness-0" /></div>
                            <h3 className="text-xl font-medium">Investment Idea</h3>
                            <p className="text-gray-400 w-8/12 mb-6">We help a business generate new product ideas with intelligence.</p>
                            <div className="m-2 w-full">
                                <hr />
                                <a href="/">READ MORE</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-6 m-8 mr-0 ">
                            <img src="./note.png" alt="" className="invert brightness-0" />
                        </div>
                        <p className="m-8 ml-1">We're committed to createa change that matters!</p>
                    </div>
                </div>
            </div>
        </>
    );
}