import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Experiences from './components/Experiences';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import BookingForm from './components/BookingForm';
import Header from './components/Header';
import Footer from './components/Footer';
import SafariPage from './pages/SafariPage';
import CulturalPage from './pages/CulturalPage';
import AdventurePage from './pages/AdventurePage';
import CulinaryPage from './pages/CulinaryPage';

function App() {
    useEffect(() => {
        document.title = 'Roots&Roams - Discover the Magic of Kenya';

        const handleScroll = (e) => {
            const href = e.currentTarget.getAttribute('href');
            if (href?.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                    window.history.pushState(null, '', href);
                }
            }
        };

        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', handleScroll);
        });

        return () => {
            document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
                anchor.removeEventListener('click', handleScroll);
            });
        };
    }, []);
    return (
        <Router>
            <div className="font-sans">
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                <Destinations />
                                <Experiences />
                                <Testimonials />
                                <CallToAction />
                                <BookingForm />
                            </>
                        }
                    />

                    <Route path="/safari" element={<SafariPage />} />
                    <Route path="/cultural" element={<CulturalPage />} />
                    <Route path="/adventure" element={<AdventurePage />} />
                    <Route path="/culinary" element={<CulinaryPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
