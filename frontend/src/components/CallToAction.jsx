import React from 'react';
import { Compass, Calendar, ShieldCheck } from 'lucide-react';

const benefits = [
    {
        icon: <Compass className="w-6 h-6" />,
        title: 'Expertly Guided Tours',
        description:
            'Our experienced local guides ensure you experience the authentic Kenya.'
    },
    {
        icon: <Calendar className="w-6 h-6" />,
        title: 'Flexible Booking',
        description:
            'Change your travel dates up to 30 days before your trip at no extra cost.'
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'Safe and Sustainable',
        description:
            "We prioritize your safety and the conservation of Kenya's natural beauty."
    }
];

const CallToAction = () => {
    return (
        <section
            id="about"
            className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Start Your Kenyan Adventure Today
                    </h2>
                    <p className="text-white/90 max-w-2xl mx-auto">
                        Book your dream safari, beach getaway, or cultural tour
                        with us and experience the beauty of Kenya with expert
                        guides and personalized service.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300"
                        >
                            <div className="bg-white text-amber-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                                {benefit.title}
                            </h3>
                            <p className="text-white/80">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
