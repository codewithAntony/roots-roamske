import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Thompson',
        location: 'United Kingdom',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
        quote: 'My safari in Kenya was the most incredible travel experience of my life. Seeing the Great Migration in the Maasai Mara was truly breathtaking. Our guide was exceptionally knowledgeable and made sure we had unforgettable wildlife encounters.',
        rating: 5
    },
    {
        id: 2,
        name: 'David Chen',
        location: 'United States',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
        quote: 'Climbing Mount Kenya was challenging but incredibly rewarding. The views were spectacular and the team that guided us was professional and supportive. I would highly recommend this adventure to anyone seeking a unique experience in Kenya.',
        rating: 5
    },
    {
        id: 3,
        name: 'Aisha Kamau',
        location: 'Kenya',
        avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150',
        quote: "As a local, I've always appreciated Kenya's beauty, but seeing Diani Beach through a guided tour gave me a new appreciation for our coastal treasures. The crystal clear waters and marine life were incredible. I'm proud to call Kenya home!",
        rating: 4
    },
    {
        id: 4,
        name: 'Michael Bauer',
        location: 'Germany',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
        quote: 'The cultural tour in Lamu was fascinating. Learning about Swahili traditions and history while walking through the ancient town was like stepping back in time. The local food was delicious, and the hospitality was unmatched.',
        rating: 5
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 8000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    const goToPrev = () => {
        setDirection('left');
        setActiveIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const goToNext = () => {
        setDirection('right');
        setActiveIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <section className="py-20 bg-emerald-800 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        What Our Visitors Say
                    </h2>
                    <p className="text-emerald-100 max-w-2xl mx-auto">
                        Hear from travelers who have experienced the magic of
                        Kenya through our tours.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{
                                transform: `translateX(-${activeIndex * 100}%)`
                            }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="w-full flex-shrink-0 px-4"
                                >
                                    <div className="bg-white rounded-xl p-8 text-gray-800 shadow-lg">
                                        <div className="flex items-center mb-6">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-amber-500"
                                            />
                                            <div>
                                                <h3 className="font-bold text-xl">
                                                    {testimonial.name}
                                                </h3>
                                                <p className="text-gray-500">
                                                    {testimonial.location}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="flex mb-2">
                                                {[...Array(5)].map(
                                                    (_, index) => (
                                                        <svg
                                                            key={index}
                                                            className={`w-5 h-5 ${
                                                                index <
                                                                testimonial.rating
                                                                    ? 'text-amber-500'
                                                                    : 'text-gray-300'
                                                            }`}
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                        <blockquote className="italic text-gray-600 mb-4">
                                            "{testimonial.quote}"
                                        </blockquote>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={goToPrev}
                        className="absolute top-1/2 -left-5 -translate-y-1/2 bg-white text-emerald-800 rounded-full p-2 shadow-lg hover:bg-emerald-100 transition-colors duration-300"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute top-1/2 -right-5 -translate-y-1/2 bg-white text-emerald-800 rounded-full p-2 shadow-lg hover:bg-emerald-100 transition-colors duration-300"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className="flex justify-center mt-8 space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === activeIndex
                                    ? 'bg-amber-500 w-10'
                                    : 'bg-white bg-opacity-30'
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
