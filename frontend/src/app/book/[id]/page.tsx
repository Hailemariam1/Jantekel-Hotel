'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, CreditCard } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useParams } from 'next/navigation';

export default function BookingPage() {
  const params = useParams();
  const roomId = params.id;
  const [step, setStep] = useState(1);

  // Mock data based on ID for presentation
  const roomDetails = {
    name: roomId === '2' ? 'Presidential Suite' : roomId === '3' ? 'Executive Double Room' : 'Deluxe King Suite',
    price: roomId === '2' ? 1200 : roomId === '3' ? 250 : 350,
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(step + 1);
  };

  return (
    <main className="min-h-screen bg-background pt-32 pb-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/rooms" className="inline-flex items-center text-gray-400 hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Rooms
        </Link>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Form */}
          <div className="w-full md:w-2/3">
            <div className="bg-surface border border-white/10 rounded-xl p-8 shadow-xl">
              <div className="flex items-center mb-8 pb-8 border-b border-white/10">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? 'bg-primary text-secondary' : 'bg-white/10 text-gray-500'} font-semibold text-sm`}>1</div>
                <div className={`flex-1 h-px mx-4 ${step >= 2 ? 'bg-primary' : 'bg-white/10'}`} />
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? 'bg-primary text-secondary' : 'bg-white/10 text-gray-500'} font-semibold text-sm`}>2</div>
                <div className={`flex-1 h-px mx-4 ${step >= 3 ? 'bg-primary' : 'bg-white/10'}`} />
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 3 ? 'bg-primary text-secondary' : 'bg-white/10 text-gray-500'} font-semibold text-sm`}>3</div>
              </div>

              {step === 1 && (
                <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleNext}>
                  <h2 className="text-2xl text-white font-serif mb-6">Guest Details</h2>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">First Name</label>
                      <input required type="text" className="w-full bg-background border border-white/10 rounded p-3 text-white focus:border-primary outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Last Name</label>
                      <input required type="text" className="w-full bg-background border border-white/10 rounded p-3 text-white focus:border-primary outline-none" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                    <input required type="email" className="w-full bg-background border border-white/10 rounded p-3 text-white focus:border-primary outline-none" />
                  </div>
                  <div className="mb-8">
                    <label className="block text-sm text-gray-400 mb-2">Special Requests</label>
                    <textarea rows={3} className="w-full bg-background border border-white/10 rounded p-3 text-white focus:border-primary outline-none" />
                  </div>
                  <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-secondary font-semibold py-4 rounded transition-colors">
                    Continue to Payment
                  </button>
                </motion.form>
              )}

              {step === 2 && (
                <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleNext}>
                  <h2 className="text-2xl text-white font-serif mb-6">Payment Method</h2>
                  <div className="bg-background border border-primary rounded p-4 mb-6 flex items-center justify-between cursor-pointer">
                    <div className="flex items-center">
                      <CreditCard className="text-primary w-6 h-6 mr-4" />
                      <span className="text-white font-medium">Credit Card</span>
                    </div>
                    <div className="w-4 h-4 rounded-full border-2 border-primary bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm text-gray-400 mb-2">Card Number</label>
                    <input required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-background border border-white/10 rounded p-3 text-white focus:border-primary outline-none" />
                  </div>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Expiry Date</label>
                      <input required type="text" placeholder="MM/YY" className="w-full bg-background border border-white/10 rounded p-3 text-white focus:border-primary outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">CVC</label>
                      <input required type="text" placeholder="123" className="w-full bg-background border border-white/10 rounded p-3 text-white focus:border-primary outline-none" />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setStep(1)} className="w-1/3 bg-white/5 hover:bg-white/10 text-white font-semibold py-4 rounded transition-colors">
                      Back
                    </button>
                    <button type="submit" className="w-2/3 bg-primary hover:bg-primary-hover text-secondary font-semibold py-4 rounded transition-colors flex items-center justify-center gap-2">
                      Confirm Reservation <CheckCircle2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.form>
              )}

              {step === 3 && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl text-white font-serif mb-4">Reservation Confirmed</h2>
                  <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    Thank you for choosing Texas Hotel. A confirmation email has been sent to your inbox. We look forward to welcoming you.
                  </p>
                  <Link href="/" className="inline-block border border-primary text-primary hover:bg-primary hover:text-secondary font-medium px-8 py-3 rounded transition-colors">
                    Return to Home
                  </Link>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Column - Summary */}
          <div className="w-full md:w-1/3">
            <div className="bg-surface border border-white/10 rounded-xl p-6 sticky top-32">
              <h3 className="text-xl text-white font-serif mb-6">Booking Summary</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-white font-medium">{roomDetails.name}</h4>
                  <p className="text-sm text-gray-400">1 Room, 2 Guests</p>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Check-in</span>
                  <span className="text-white">Oct 15, 2026</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Check-out</span>
                  <span className="text-white">Oct 18, 2026</span>
                </div>
              </div>
              
              <div className="border-t border-white/10 pt-4 space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">${roomDetails.price} x 3 nights</span>
                  <span className="text-white">${roomDetails.price * 3}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Taxes & Fees</span>
                  <span className="text-white">${Math.round(roomDetails.price * 3 * 0.15)}</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                <span className="text-lg text-white font-medium">Total</span>
                <span className="text-2xl text-primary font-semibold">${(roomDetails.price * 3) + Math.round(roomDetails.price * 3 * 0.15)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
