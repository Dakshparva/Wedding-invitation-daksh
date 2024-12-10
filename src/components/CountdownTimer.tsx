import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2025-02-23T00:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative py-10 md:py-20 bg-pink-50">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-serif mb-8 sm:mb-12">Counting Down to Our Special Day</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="relative">
              <div className="relative w-20 sm:w-32 h-20 sm:h-32 mx-auto">
                <Heart 
                  className="w-full h-full text-pink-500 beating-heart absolute inset-0" 
                  fill="#ec4899"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="text-xl sm:text-3xl font-bold">{value}</div>
                  <div className="text-xs sm:text-sm capitalize">{unit}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
