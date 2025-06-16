import React from 'react';

export default function AboutUs() {
    return (
        <section className="bg-gray-100 dark:bg-gray-900 py-12 px-6 mt-0">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center w-9/12 m-auto">

                <div className="relative rounded-lg overflow-hidden">
                    <img src="./Aboutus.jpg" alt="Business meeting" className="rounded-lg shadow-lg w-12/12" />
                    <div className="absolute bottom-0 left-0 bg-blue-900 text-white text-xs px-3 py-1 rounded-tr-lg">
                        Trusted By <br /><h1 className='font-bold'>75K</h1>
                    </div>
                </div>

                <div className="space-y-5">
                    <ul className="list-disc ml-5">
                        <li className="text-sm text-yellow-500 uppercase font-semibold">About us</li>
                    </ul>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                        The essential steps for business success
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 w-11/12">
                        Our objective is to offer a high-quality service and a dependable source of income to our investors while
                        minimizing any potential risks and automating and simplifying the relationships.
                    </p>
                    <div className='flex gap-20'>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="text-2xl">💡</div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Business Innovations</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Best working</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-2xl">📄</div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Marketing Solution</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Best working</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-64 ">
                            <img src="./Aboutus2.jpg" alt="Handshake" className="rounded shadow" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
