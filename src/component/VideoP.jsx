import React from 'react';

export default function VideoPresentation() {
    return (
        <section
            className="relative bg-cover bg-center   text-white dark:text-white py-12 px-4"
            style={{ backgroundImage: "url('./videop.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/70 dark:bg-black/80 z-0"></div>

            <div className="relative z-10 max-w-4xl flex justify-between mx-auto">
                <h2 className="text-xl md:text-3xl max-w-6/12 text-right font-semibold leading-relaxed">
                    Whether you are looking for answers,
                    would like to solve any business problem
                </h2>

                <div className="flex justify-center items-center ">
                    <div className='w-19 h-19 border-1 border-gray-500 rounded-full flex justify-center items-center'>
                        <div className='w-16 h-16 border-1 border-gray-500 rounded-full flex justify-center items-center'>
                            <button className="relative w-13 h-13 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center shadow-lg">
                                <span className="text-white text-xl text-center">▶</span>
                            </button>
                        </div>
                    </div>
                    <span className="absolute-right-28 ml-6 text-yellow-400 text-sm underline decoration-gray-500">Video Presentation</span>
                </div>
            </div>
        </section>
    );
}
