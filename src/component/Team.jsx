import React from "react";

const teamMembers = [
    {
        name: "Amy Jenkins",
        role: "Financial Analyst",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSus8Q6U3Uz3p4psusCq6NgDrs7-UPGoWtUBYWbsiNs53ZzfLSPtd_39CkS1cOLbM7bifA&usqp=CAU",
    },
    {
        name: "Jeffrey Mueller",
        role: "Marketing Analyst",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_XFYSJDAcMGylGtIf844G5btT61lSVjsgEk-eKkpwZd5drKgf8odlsZSOGrEBtKm46Y&usqp=CAU",
    },
    {
        name: "Anne Arias",
        role: "Statistical Analyst",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_XFYSJDAcMGylGtIf844G5btT61lSVjsgEk-eKkpwZd5drKgf8odlsZSOGrEBtKm46Y&usqp=CAU",
    },
    {
        name: "Gerald Ruggiero",
        role: "Business Eng.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSus8Q6U3Uz3p4psusCq6NgDrs7-UPGoWtUBYWbsiNs53ZzfLSPtd_39CkS1cOLbM7bifA&usqp=CAU",
    },
];

const TeamSection = ({ mode }) => {
    return (
        <section className={`py-16 ${mode ? "bg-gray-900" : "bg-white"} mt-18 transition-colors duration-300`}>
            <div className="text-center mb-12 w-10/12 m-auto">
                <ul className="list-disc ml-5 justify-items-center">
                    <li className="text-sm text-yellow-500 uppercase font-semibold">Meet Our Team</li>
                </ul>
                <h2 className={`text-3xl font-bold ${mode ? "text-white" : "text-gray-800"}`}>
                    Our Specialized Team
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-12 w-10/12 m-auto">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className={`rounded-xl p-6 flex flex-col items-center text-center shadow-md transition-all duration-300
                        ${mode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 rounded-full border-4 border-yellow-400 mb-4 object-cover"
                        />
                        <h3 className={`text-lg font-semibold ${mode ? "text-white" : "text-gray-800"}`}>
                            {member.name}
                        </h3>
                        <p className={`text-sm ${mode ? "text-gray-300" : "text-gray-600"}`}>
                            {member.role}
                        </p>

                        <div className="flex gap-3 mt-4">
                            {["facebook", "twitter", "instagram", "linkedin"].map((platform, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className={`w-8 h-8 flex items-center justify-center rounded-full border transition
                                    ${mode
                                            ? "border-gray-600 text-gray-300 hover:bg-yellow-400 hover:text-white"
                                            : "border-gray-300 text-gray-600 hover:bg-yellow-400 hover:text-white"
                                        }`}
                                >
                                    <i className={`fab fa-${platform}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;
