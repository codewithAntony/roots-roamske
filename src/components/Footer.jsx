import React from 'react';
import {
    Facebook,
    Twitter,
    Instagram,
    Mail,
    Phone,
    MapPin,
    Youtube
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            Roots&<span className="text-amber-500">Roams</span>
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Discover the magic of Kenya with our expertly
                            crafted tours designed to showcase the very best of
                            this beautiful country.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                            >
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {[
                                'Home',
                                'About Us',
                                'Destinations',
                                'Experiences',
                                'Special Offers',
                                'Gallery',
                                'FAQs',
                                'Contact'
                            ].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4">
                            Popular Destinations
                        </h4>
                        <ul className="space-y-2">
                            {[
                                'Maasai Mara',
                                'Diani Beach',
                                'Mount Kenya',
                                'Amboseli',
                                'Lamu Island',
                                'Lake Nakuru',
                                'Nairobi',
                                'Tsavo'
                            ].map((dest) => (
                                <li key={dest}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                                    >
                                        {dest}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-400">
                                    34 Twiga House, Nairobi, Kenya
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-400">
                                    +254 725 010 898
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-400">
                                    murithinamuu@gmail.com
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm mb-4 md:mb-0">
                            &copy; {new Date().getFullYear()} Roots&Roams. All
                            rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a
                                href="#"
                                className="text-gray-500 hover:text-amber-500 text-sm transition-colors duration-300"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-amber-500 text-sm transition-colors duration-300"
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-amber-500 text-sm transition-colors duration-300"
                            >
                                Cookies Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
