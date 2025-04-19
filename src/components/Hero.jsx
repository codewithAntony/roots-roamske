import { ChevronRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const slides = [
    {
        image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
        title: "Experience thr Magic of Kenya",
        subtitle: "Unforgettable adventures await in the heart of East Africa"
    },
    {
        image: "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg",
        title: "Wildlife Adventures",
        subtitle: "Get up close with Africa's majestic creatures"
    },
    {
        image: "https://images.pexels.com/photos/6465979/pexels-photo-6465979.jpeg",
        title: "Cultural Immersion",
        subtitle: "Connect with Kenya's rich heritage and traditions"
    }
]

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 6000)
        return () => clearInterval(interval)
    }, [])
  return (
    <section id='home' className='relative h-screen w-full overflow-hidden'>
        {slides.map((slide, index) => (
            <div key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className='absolute inset-0 w-full h-full bg-cover bg-center'
                style={{ backgroundImage: `url(${slide.image})`}}
                >
                    <div className='absolute inset-0 bg-black bg-opacity-40'>
                    </div>
                </div>
            </div>
        ))}

        <div className='absolute inset-0 flex flex-col justify-center items-center text-white px-4 z-10'>
            <div className='max-w-4xl mx-auto text-center transform transition-all duration-1000 translate-y-0'>
<h1 className='text-4xl md:text-6xl font-bold mb-4 leading-tight'>
    {slides[currentSlide].title}

</h1>
<p className='text-xl md:text-2xl mb-8 max-w-2xl mx-auto'>
{slides[currentSlide].subtitle}
</p>
<div className='flex flex-col sm:flex-row justify-center gap-4'>
    <button className='bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center justify-center'>
Explore Destinations
<ChevronRight size={20} className='ml-1' />
    </button>
    <button className='border-2 border-white hover:bg-white hover:text-emerald-800 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300'>
View SpecialOffers
    </button>
</div>
            </div>
        </div>

        <div className='absolute bottom-8 left-0 right-0 flex justify-center spaxe-x-2'>
            {slides.map((_, index) => (
                <button key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-amber-500 w-8' : 'bg-white bg-opacity-50'}`}
                aria-label={`Go to slide ${index + 1}`}
                >

                </button>
            ))}

        </div>

    </section>
  )
}

export default Hero