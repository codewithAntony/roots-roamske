import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Experiences from './components/Experiences';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
    useEffect(() => {
        document.title = 'KenyaExplore - Discover the Magic of Kenya';

        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href')?.substring(1);
                if (!targetId) return;

                const targetElement = document.getElementById(targetId);
                if (!targetElement) return;

                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            });
        });

        return () => {
            document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
                anchor.removeEventListener('click', () => {});
            });
        };
    }, []);
    return (
        <div className="font-sans">
            <Header />
            <Hero />
            <Destinations />
            <Experiences />
            <Testimonials />
            <CallToAction />
            <Footer />
        </div>
    );
}

export default App;
