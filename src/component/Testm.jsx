import React from "react";

const testimonials = [
    {
        quote:
            "Business consulting has really helped our business. Definitely worth the investment. Business consulting has made a huge difference! It has saved me so much time.",
        name: "Lizabeth G. Mack",
        role: "Marketing Lead",
        image: "https://images.pexels.com/photos/4347368/pexels-photo-4347368.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Client 2",
        image: "https://images.pexels.com/photos/4347368/pexels-photo-4347368.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Client 3",
        image: "https://media.istockphoto.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=T5dukPD1r-o0BFqeqlIap7xzw07icucetwKaEC2Ms5M=",
    },
];

export default function Testimonials({ mode }) {
    return (
        <section className={`py-10 ${mode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} text-center transition-colors duration-300`}>
            <div className={`w-9/12 mx-auto py-8 rounded-2xl ${mode ? "bg-gray-800" : "bg-white"}`}>
                <ul className="list-disc ml-5 justify-items-center">
                    <li className="text-sm text-yellow-500 uppercase font-semibold">Testimonials</li>
                </ul>
                <h2 className={`text-3xl font-bold mb-6 ${mode ? "text-white" : "text-gray-900"}`}>
                    Reviews of Our Clients
                </h2>

                <div className="flex justify-center mb-6 h-14">
                    <span className="text-8xl bg-amber-400 rounded-4xl w-14">“</span>
                </div>

                <p className={`max-w-2xl mx-auto text-lg leading-relaxed mb-4 ${mode ? "text-gray-300" : "text-gray-600"}`}>
                    &ldquo;{testimonials[0].quote}&rdquo;
                </p>

                <p className="text-yellow-500 font-semibold">{testimonials[0].name}</p>
                <p className={`text-sm mb-8 ${mode ? "text-gray-400" : "text-gray-500"}`}>
                    — {testimonials[0].role}
                </p>

                <div className="flex justify-center gap-6 mt-6">
                    {testimonials.map((client, idx) => (
                        <img
                            key={idx}
                            src={client.image}
                            alt={client.name}
                            className={`w-14 h-14 rounded-full border-4 shadow-md object-cover transition-all duration-300 ${idx === 0 ? "border-yellow-400" : "border-transparent"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
