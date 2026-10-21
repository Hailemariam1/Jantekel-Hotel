'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Wifi, Coffee, Wind, Tv } from 'lucide-react';
import Link from 'next/link';

const rooms = [
  {
    id: '1',
    name: 'Deluxe King Suite',
    description: 'A spacious suite offering breathtaking views of the Gondar landscape, featuring a king-sized bed and premium amenities.',
    price: 350,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop',
    amenities: ['Free WiFi', 'Mini Bar', 'Air Conditioning', 'Flat Screen TV'],
  },
  {
    id: '2',
    name: 'Presidential Suite',
    description: 'The pinnacle of luxury. This expansive suite includes a private dining area, jacuzzi, and dedicated butler service.',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop',
    amenities: ['Free WiFi', 'Butler Service', 'Jacuzzi', 'City View'],
  },
  {
    id: '3',
    name: 'Executive Double Room',
    description: 'Perfect for business travelers or families. Elegant design meets unparalleled comfort.',
    price: 250,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop',
    amenities: ['Free WiFi', 'Work Desk', 'Air Conditioning', 'Flat Screen TV'],
  }
];

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl text-primary font-serif mb-6">Accommodations</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experience uncompromised comfort and sophistication in our meticulously designed rooms and suites.
          </p>
        </motion.div>

        <div className="space-y-16">
          {rooms.map((room, index) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 bg-surface rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-colors duration-500`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden lg:w-1/2 lg:aspect-auto lg:min-h-[400px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url(${room.image})` }}
                />
              </div>
              
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-3xl text-white font-serif">{room.name}</h2>
                  <div className="text-right">
                    <span className="block text-2xl text-primary font-semibold">${room.price}</span>
                    <span className="text-sm text-gray-500">per night</span>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                  {room.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {room.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {amenity}
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto pt-6 border-t border-white/10">
                  <Link 
                    href={`/book/${room.id}`}
                    className="inline-flex items-center text-primary hover:text-primary-hover font-medium transition-colors"
                  >
                    Reserve this room <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
