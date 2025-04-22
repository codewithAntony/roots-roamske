import React, { useState } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
import { Calendar, Users, Plane } from 'lucide-react';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        checkIn: '',
        checkOut: '',
        adults: 1,
        children: 0,
        tripPreference: '',
        termsAccepted: false
    });

    // const [recaptchaValue, setRecaptchaValue] = useState(null);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!recaptchaValue) {
            alert('Please complete the reCAPTCHA');
            return;
        }
        console.log('Form submitted:', formData);
        // Handle form submission
    };

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                            Book Your Kenyan Adventure
                        </h2>
                        <p className="text-gray-600">
                            Fill in the details below to start your journey
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label
                                    htmlFor="firstName"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                                    placeholder="Enter your first name"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="lastName"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                                    placeholder="Enter your last name"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                                    placeholder="+254 712 345 678"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div className="relative">
                                <label
                                    htmlFor="checkIn"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Check-in Date
                                </label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        id="checkIn"
                                        name="checkIn"
                                        value={formData.checkIn}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                                    />
                                    <Calendar
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                        size={20}
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <label
                                    htmlFor="checkOut"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Check-out Date
                                </label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        id="checkOut"
                                        name="checkOut"
                                        value={formData.checkOut}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                                    />
                                    <Calendar
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                        size={20}
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="adults"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Number of Adults
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        id="adults"
                                        name="adults"
                                        min="1"
                                        value={formData.adults}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                                    />
                                    <Users
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                        size={20}
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="children"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Number of Children
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        id="children"
                                        name="children"
                                        min="0"
                                        value={formData.children}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                                    />
                                    <Users
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                        size={20}
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="tripPreference"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Trip Preference
                            </label>
                            <div className="relative">
                                <select
                                    id="tripPreference"
                                    name="tripPreference"
                                    value={formData.tripPreference}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 appearance-none"
                                >
                                    <option value="">
                                        Select your preference
                                    </option>
                                    <option value="safari">
                                        Wildlife Safari
                                    </option>
                                    <option value="beach">
                                        Beach Vacation
                                    </option>
                                    <option value="cultural">
                                        Cultural Tour
                                    </option>
                                    <option value="adventure">
                                        Adventure Trip
                                    </option>
                                </select>
                                <Plane
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                    size={20}
                                />
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <input
                                type="checkbox"
                                id="terms"
                                name="termsAccepted"
                                checked={formData.termsAccepted}
                                onChange={handleInputChange}
                                required
                                className="mt-1"
                            />
                            <label
                                htmlFor="terms"
                                className="text-gray-600 text-sm"
                            >
                                I agree to the{' '}
                                <a
                                    href="#"
                                    className="text-emerald-600 hover:text-emerald-700"
                                >
                                    Terms and Conditions
                                </a>{' '}
                                and{' '}
                                <a
                                    href="#"
                                    className="text-emerald-600 hover:text-emerald-700"
                                >
                                    Privacy Policy
                                </a>
                            </label>
                        </div>

                        {/* recaptcha integration */}

                        {/* <div className="flex justify-center">
              <ReCAPTCHA
                sitekey="your-recaptcha-site-key"
                onChange={value => setRecaptchaValue(value)}
              />
            </div> */}

                        <button
                            type="submit"
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-lg transition-colors duration-300"
                        >
                            Book Now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookingForm;
