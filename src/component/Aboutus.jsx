import React from 'react';

export function AboutUs({ mode }) {
    return (
        <section className={`${mode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} py-12`}>
            <div className="w-11/12 md:w-9/12 mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Image Section */}
                <div className="relative rounded-lg overflow-hidden">
                    <img
                        src="./Aboutus.jpg"
                        alt="Team discussing business strategy"
                        className="rounded-lg shadow-lg w-full"
                    />
                    <div className="absolute bottom-0 left-0 bg-blue-900 text-white text-xs px-3 py-1 rounded-tr-lg">
                        Trusted By <br />
                        <h1 className="font-bold text-lg">75K</h1>
                    </div>
                </div>

                {/* Text Content Section */}
                <div className="space-y-5">
                    <ul className="list-disc ml-5">
                        <li className="text-sm text-yellow-500 uppercase font-semibold">About us</li>
                    </ul>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                        The essential steps for business success
                    </h2>
                    <p className={`${mode ? "text-gray-300" : "text-gray-600"} w-full md:w-11/12`}>
                        Our objective is to offer a high-quality service and a dependable source of income to our investors while
                        minimizing any potential risks and simplifying the relationships.
                    </p>

                    {/* Features and Image Grid */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-20">
                        <div className="space-y-6">
                            <div className="flex items-start gap-3">
                                <div className="text-2xl">💡</div>
                                <div>
                                    <h4 className="font-semibold">Business Innovations</h4>
                                    <p className={`text-sm ${mode ? "text-gray-400" : "text-gray-600"}`}>Creative & efficient methods</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-2xl">📄</div>
                                <div>
                                    <h4 className="font-semibold">Marketing Solution</h4>
                                    <p className={`text-sm ${mode ? "text-gray-400" : "text-gray-600"}`}>Result-oriented strategies</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-64">
                            <img
                                src="./Aboutus2.jpg"
                                alt="Two professionals shaking hands"
                                className="rounded shadow"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
