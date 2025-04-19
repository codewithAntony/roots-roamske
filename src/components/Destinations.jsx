import React, { useState } from 'react';

const destinations = [
    {
        id: 1,
        name: 'Maasai Mara',
        image: 'https://images.unsplash.com/photo-1559494487-a5bbc635ed2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFhc2FpJTIwbWFyYXxlbnwwfHwwfHx8MA%3D%3D',
        description:
            "Experience the world's most spectacular wildlife events in Kenya's most famous reserve.",
        category: 'Safari'
    },
    {
        id: 2,
        name: 'Diani Beach',
        image: 'https://images.unsplash.com/photo-1602579350028-3b6e757e379c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpYW5pJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D',
        description:
            'Relax on pristine white sands and swim in crystal clear turquoise waters of the Indian Ocean.',
        category: 'Beach'
    },
    {
        id: 3,
        name: 'Mount Kenya',
        image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXQlMjBrZW55YXxlbnwwfHwwfHx8MA%3D%3D',
        description:
            "Trek Africa's second-highest peak with breathtaking landscapes and diverse wildlife.",
        category: 'Adventure'
    },
    {
        id: 4,
        name: 'Lamu Island',
        image: 'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg',
        description:
            'Explore the oldest Swahili settlement with its unique architecture and rich cultural heritage.',
        category: 'Cultural'
    },
    {
        id: 5,
        name: 'Amboseli National Park',
        image: 'https://images.unsplash.com/photo-1706398760464-d5b2ac1f33ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1ib3NlbGklMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D',
        description:
            'See elephants against the backdrop of snow-capped Mount Kilimanjaro.',
        category: 'Safari'
    },
    {
        id: 6,
        name: 'Lake Nakuru',
        image: 'https://images.unsplash.com/photo-1691161880599-287b6b52d372?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFtYm9zZWxpJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww',
        description:
            'Witness millions of flamingos creating a stunning pink carpet across the alkaline lake.',
        category: 'Safari'
    }
];

const categories = ['All', 'Safari', 'Beach', 'Adventure', 'Cultural'];

const Destinations = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [hoveredItem, setHoveredItem] = useState(null);

    const filteredDestinations =
        activeCategory === 'All'
            ? destinations
            : destinations.filter((dest) => dest.category === activeCategory);

    return (
        <section id="destinations" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Explore Kenya's Best Destinations
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover Kenya's diverse landscapes, from wildlife
                        reserves to pristine beaches, mountains, and cultural
                        heritage sites.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                                activeCategory === category
                                    ? 'bg-emerald-800 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredDestinations.map((destination) => (
                        <div
                            key={destination.id}
                            className="bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            onMouseEnter={() => setHoveredItem(destination.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <div className="relative overflow-hidden h-64">
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className={`w-full h-full object-cover transition-transform duration-700 ${
                                        hoveredItem === destination.id
                                            ? 'scale-110'
                                            : 'scale-100'
                                    }`}
                                />
                                <div className="absolute top-4 right-4 bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                    {destination.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    {destination.name}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {destination.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <button className="text-emerald-800 font-medium hover:text-amber-500 transition-colors duration-300">
                                        Explore more
                                    </button>
                                    <div className="flex items-center">
                                        <span className="text-amber-500 font-bold">
                                            4.8
                                        </span>
                                        <div className="flex ml-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <svg
                                                    key={star}
                                                    className={`w-4 h-4 ${star <= 4 ? 'text-amber-500' : 'text-gray-300'}`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-emerald-800 hover:bg-emerald-900 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300">
                        View All Destinations
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Destinations;
