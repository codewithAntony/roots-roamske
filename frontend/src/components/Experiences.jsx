import React from 'react';
import { Camera, Compass, Users, Utensils } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const experiences = [
    {
        id: 1,
        title: 'Wildlife Safari',
        route: 'safari',
        description:
            'Witness the Big Five and the Great Migration in their natural habitat.',
        icon: <Camera className="w-6 h-6" />,
        bgColor: 'bg-amber-500',
        textColor: 'text-amber-500',
        image: 'https://images.unsplash.com/photo-1587647308018-a6cc19918efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFtdSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id: 2,
        title: 'Cultural Tours',
        route: 'cultural',
        description:
            "Immerse yourself in Kenya's rich cultural heritage and traditions.",
        icon: <Users className="w-6 h-6" />,
        bgColor: 'bg-emerald-800',
        textColor: 'text-emerald-800',
        image: 'https://images.unsplash.com/photo-1544223192-a4af683edb17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hYXNhaSUyMG1hcmF8ZW58MHx8MHx8fDA%3D'
    },
    {
        id: 3,
        title: 'Adventure Activities',
        route: 'adventure',
        description:
            'From hiking and climbing to water sports and hot air balloon rides.',
        icon: <Compass className="w-6 h-6" />,
        bgColor: 'bg-blue-600',
        textColor: 'text-blue-600',
        image: 'https://images.unsplash.com/photo-1709842995579-45852d4e2f08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWR2ZW50dXJlcyUyMGtlbnlhfGVufDB8fDB8fHww'
    },
    {
        id: 4,
        title: 'Culinary Experiences',
        route: 'safari',
        description:
            'Taste authentic Kenyan cuisine and learn traditional cooking methods.',
        icon: <Utensils className="w-6 h-6" />,
        bgColor: 'bg-red-500',
        textColor: 'text-red-500',
        image: 'https://images.unsplash.com/photo-1579032121374-31c8ba70ec65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGN1bGluYXJ5JTIwa2VueWF8ZW58MHx8MHx8fDA%3D'
    }
];

const Experiences = () => {
    const navigate = useNavigate();

    const handleExploreClick = (experienceType) => {
        navigate(`/${experienceType.toLowerCase()}`);
    };

    return (
        <section id="experiences" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Unforgettable Experiences
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Create lifelong memories with our carefully curated
                        experiences that showcase the best of Kenya's diverse
                        offerings.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {experiences.map((exp) => (
                        <div
                            key={exp.id}
                            className="flex flex-col md:flex-row gap-6 group"
                        >
                            <div className="w-full md:w-1/2 relative overflow-hidden rounded-xl">
                                <img
                                    src={exp.image}
                                    alt={exp.title}
                                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div
                                    className={`absolute top-4 left-4 ${exp.bgColor} text-white p-3 rounded-full`}
                                >
                                    {exp.icon}
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col justify-center">
                                <h3
                                    className={`text-2xl font-bold ${exp.textColor} mb-3`}
                                >
                                    {exp.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {exp.description}
                                </p>
                                <ul className="space-y-2 mb-4">
                                    {[1, 2, 3].map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-center"
                                        >
                                            <span
                                                className={`mr-2 text-lg ${exp.textColor}`}
                                            >
                                                •
                                            </span>
                                            <span className="text-gray-700">
                                                Experience feature {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() =>
                                        handleExploreClick(exp.route)
                                    }
                                    className={`${exp.bgColor} text-white px-6 py-3 rounded-lg font-medium transition-transform duration-300 hover:scale-105 self-start`}
                                >
                                    Explore {exp.title}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;
