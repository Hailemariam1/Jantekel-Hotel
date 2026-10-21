'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin, CalendarDays, Star } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image (Mockup) */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Overlay */}

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex items-center space-x-2 text-primary mb-6"
          >
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight"
          >
            Experience True <br/>
            <span className="text-primary italic">Luxury</span> in Gondar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12"
          >
            A sanctuary of elegance and unmatched hospitality. Discover the majestic beauty of Ethiopia while staying at the premier five-star Jantekel Hotel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link 
              href="/rooms" 
              className="bg-primary hover:bg-primary-hover text-secondary font-medium px-8 py-4 rounded flex items-center transition-all duration-300 transform hover:scale-105"
            >
              Book Your Stay <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/experiences" 
              className="border border-white/30 hover:border-primary text-white hover:text-primary font-medium px-8 py-4 rounded transition-all duration-300"
            >
              Explore Experiences
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Booking Bar */}
      <section className="relative -mt-16 z-20 max-w-6xl mx-auto px-4">
        <div className="bg-surface border border-white/10 p-6 rounded-lg shadow-2xl flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex items-center gap-4 text-white w-full md:w-1/3">
            <CalendarDays className="text-primary w-8 h-8" />
            <div className="flex flex-col w-full">
              <span className="text-sm text-gray-400">Check In - Check Out</span>
              <input type="text" placeholder="Select Dates" className="bg-transparent border-b border-white/20 focus:border-primary outline-none py-1 text-white placeholder-gray-500 w-full" />
            </div>
          </div>
          <div className="flex items-center gap-4 text-white w-full md:w-1/3">
            <MapPin className="text-primary w-8 h-8" />
            <div className="flex flex-col w-full">
              <span className="text-sm text-gray-400">Guests</span>
              <select className="bg-transparent border-b border-white/20 focus:border-primary outline-none py-1 text-white w-full appearance-none">
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
              </select>
            </div>
          </div>
          <button className="bg-primary hover:bg-primary-hover text-secondary w-full md:w-auto px-8 py-4 font-semibold rounded transition-colors uppercase tracking-wider text-sm">
            Check Availability
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl text-primary mb-4">A World of Indulgence</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          From world-class dining to rejuvenating spa treatments, every moment at Jantekel Hotel is designed to exceed your expectations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Exquisite Dining", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" },
            { title: "Luxury Suites", img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop" },
            { title: "Wellness Spa", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" }
          ].map((feature, idx) => (
            <div key={idx} className="group relative h-96 overflow-hidden rounded-lg cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${feature.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <h3 className="absolute bottom-8 left-8 text-2xl text-white font-serif">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
