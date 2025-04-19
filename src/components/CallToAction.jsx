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
        <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
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

                <div className="bg-white rounded-xl shadow-xl p-8 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                        Ready to Explore Kenya?
                    </h3>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 mb-1"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 mb-1"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="destination"
                                className="block text-gray-700 mb-1"
                            >
                                Preferred Destination
                            </label>
                            <select
                                id="destination"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            >
                                <option value="">Select a destination</option>
                                <option value="maasai-mara">Maasai Mara</option>
                                <option value="diani-beach">Diani Beach</option>
                                <option value="mount-kenya">Mount Kenya</option>
                                <option value="amboseli">
                                    Amboseli National Park
                                </option>
                                <option value="lamu">Lamu Island</option>
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-gray-700 mb-1"
                            >
                                Special Requests
                            </label>
                            <textarea
                                id="message"
                                rows={3}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                                placeholder="Tell us about your travel preferences"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-emerald-800 hover:bg-emerald-900 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                        >
                            Get a Custom Quote
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
