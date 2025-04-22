import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import logo from '../assets/images/roots&roamslogo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [language, setLanguage] = useState('English');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleLanguage = () => {
        setLanguage(language === 'English' ? 'Swahili' : 'English');
    };

    return (
        <header
            className={`fixed w-full transition-all duration-300 z-50 ${
                scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
            }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex">
                    {/* <div className="w-24 flex-shrink-0">
                        <img
                            src={logo}
                            alt="roots&roams logo"
                            className="w-full h-auto object-contain"
                        />
                    </div> */}
                    <div className="flex items-center">
                        {/* <h1
                            className={`text-2xl font-bold ${scrolled ? 'text-emerald-800' : 'text-white'}`}
                        >
                            Roots&
                            <span className="text-amber-500">Roams</span>
                        </h1> */}
                        <h1
                            className={`text-2xl font-bold ${scrolled ? 'text-emerald-800' : 'text-white'}`}
                        >
                            visit
                            <span className="text-amber-500">kenya</span>
                        </h1>
                    </div>
                </div>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-8">
                        {[
                            'Home',
                            'Destination',
                            'Experiences',
                            'About',
                            'Contact'
                        ].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className={`font-medium ${scrolled ? 'text-gray-700 hover:text-emerald-700' : 'text-white hover:text-amber-300'} transition-colors duration-300`}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={toggleLanguage}
                        className={`flex items-center space-x-1 font-medium ${
                            scrolled
                                ? 'text-gray-700 hover:text-emerald-700'
                                : 'text-white hover:text-amber-300'
                        } transition-colors duration-300`}
                    >
                        <Globe size={16} />
                        <span>{language}</span>
                        <ChevronDown size={16} />
                    </button>

                    <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full font-medium transition-colors duration-300">
                        Book Now
                    </button>
                </nav>

                {/* mobile menu button */}
                <button
                    className="md:hidden"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X
                            className={
                                scrolled ? 'text-gray-800' : 'text-white'
                            }
                            size={24}
                        />
                    ) : (
                        <Menu
                            className={
                                scrolled ? 'text-gray-800' : 'text-white'
                            }
                            size={24}
                        />
                    )}
                </button>
            </div>

            {/* mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg absolute w-full">
                    <ul className="pt-2 pb-4 px-4 space-y-2">
                        {[
                            'Home',
                            'Destination',
                            'Experiences',
                            'About',
                            'Contact'
                        ].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="block py-2 text-gray-700 hover:text-emerald-700 font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                        <li className="pt-2 border-t border-gray-200">
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center space-x-1 py-2 text-gray-700"
                            >
                                <Globe size={16} />
                                <span>{language}</span>
                            </button>
                        </li>

                        <li className="pt-2">
                            <button className="w-full bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full font-medium transition-colors duration-300">
                                Book Now
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
