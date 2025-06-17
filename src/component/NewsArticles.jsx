import React from 'react';

const articles = [
    {
        title: "Customer onboarding their business classes.",
        category: "Analytics",
        comments: 13,
        date: "09",
        month: "Nov",
        image: "./news1.jpg",
    },
    {
        title: "How investing in dependents increases business",
        category: "Finance",
        comments: 6,
        date: "04",
        month: "Nov",
        image: "./news2.jpg",
    },
    {
        title: "7 Productivity tips to avoid burnout when working",
        category: "Consultation",
        comments: 1,
        date: "30",
        month: "Oct",
        image: "./news3.jpg",
    },
];

export default function NewsArticles({ mode }) {
    return (
        <section className={`${mode ? "bg-gray-900" : "bg-white"} py-16 pb-24 transition-colors duration-300`}>
            <div className="text-center mb-10">
                <ul className="list-disc ml-5 flex items-center justify-center">
                    <li className="uppercase text-amber-300 tracking-wide justify-center">Latest News</li>
                </ul>
                <h2 className={`text-3xl font-bold ${mode ? "text-white" : "text-gray-900"}`}>News & Articles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {articles.map((article, idx) => (
                    <div
                        key={idx}
                        className={`${mode ? "bg-gray-800 text-white" : "bg-white text-gray-900"} 
                        shadow-md rounded overflow-hidden transition-colors duration-300`}
                    >
                        <div className="relative">
                            <img src={article.image} alt="news" className="w-full h-48 object-cover" />
                            <div className="absolute -bottom-8 right-8 bg-black/90 text-white text-center p-2 w-14">
                                <p className="text-lg font-bold">{article.date}</p>
                                <p className="text-xs uppercase">{article.month}</p>
                            </div>
                        </div>
                        <div className="p-4">
                            <p className={`text-xs uppercase tracking-wide mb-1 ${mode ? "text-gray-400" : "text-gray-600"}`}>
                                {article.category} &bull; {String(article.comments).padStart(2, '0')} Comments
                            </p>
                            <h3 className={`${mode ? "text-white" : "text-gray-900"} font-semibold text-lg`}>
                                {article.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-10">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium px-6 py-2 rounded text-sm uppercase">
                    View All Blog
                </button>
            </div>
        </section>
    );
}
