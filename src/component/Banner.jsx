import React from 'react';

export default function BusinessHero() {
    return (
        <section className="relative bg-cover bg-center h-[280px]" style={{ backgroundImage: `url('./banner.jpg')` }}>
            <div className="absolute inset-0 bg-black/80 h-11.2/12 "></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full w-10/12 m-auto px-6 md:px-16 text-white">
                <h1 className="text-3xl md:text-4xl font-bold leading-snug md:w-1/2">
                    Offering the best experience of business consulting
                </h1>
                <button className="mt-6 md:mt-0 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold w-48 h-12 rounded shadow">
                    DISCOVER MORE INFO
                </button>
            </div>

            <div className="absolute left-1/2 translate-x-[-50%] bottom-[-70px] w-8/12 md:w-4/6 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-8 px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center z-20">
                {[
                    { count: '25+', label: 'Years Experience' },
                    { count: '23k', label: 'Project Completed' },
                    { count: '226+', label: 'Consultation' },
                    { count: '958+', label: 'Happy Clients' },
                ].map((item, idx) => (
                    <div key={idx}>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white  underline decoration-yellow-400">
                            {item.count}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
