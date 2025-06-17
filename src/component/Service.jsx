import React from "react";

export function Service({ mode }) {
    return (
        <div className={`w-full ${mode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
            <div className="mx-auto w-9/12 text-center pt-10">
                <ul className="list-disc ml-5">
                    <li className="uppercase text-amber-400">Our dedicated services</li>
                </ul>
                <h1 className="text-3xl font-bold mt-2">Service We Provide</h1>

                <div className="flex flex-wrap justify-center gap-4 mt-7">
                    {/* Card */}
                    {[
                        { img: "./SP.png", title: "Strategic Planning" },
                        { img: "./MA.png", title: "Market Analysis" },
                        { img: "./FP.png", title: "Finance Planning" },
                        { img: "./II.png", title: "Investment Idea" }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className={`border-2 rounded-lg p-6 w-64 transition-colors duration-300 ${mode ? "border-gray-700" : "border-gray-300"
                                }`}
                        >
                            <div className="w-12 mx-auto mb-4">
                                <img src={item.img} alt="" className={`${mode ? "invert" : ""}`} />
                            </div>
                            <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                            <p className={`mb-4 text-sm ${mode ? "text-gray-300" : "text-gray-600"}`}>
                                We help a business generate new product ideas with intelligence.
                            </p>
                            <hr className="mb-2" />
                            <a
                                href="/"
                                className={`text-sm font-semibold ${mode ? "text-amber-400" : "text-blue-600"
                                    } hover:underline`}
                            >
                                READ MORE
                            </a>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="flex items-center justify-center mt-10">
                    <div className="w-6 mr-2">
                        <img src="./note.png" alt="" className={`${mode ? "invert" : ""}`} />
                    </div>
                    <p className="text-sm font-medium">We're committed to create a change that matters!</p>
                </div>
            </div>
        </div>
    );
}
