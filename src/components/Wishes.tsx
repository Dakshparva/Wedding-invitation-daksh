import React, { useState, useEffect } from 'react';
import { Heart, Trash } from 'lucide-react';

interface Wish {
  name: string;
  message: string;
  timestamp: string;
}

export default function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [newWish, setNewWish] = useState({ name: '', message: '' });
  const [currentWishIndex, setCurrentWishIndex] = useState(0);

  // Load wishes from localStorage on mount
  useEffect(() => {
    const savedWishes = localStorage.getItem('wedding_wishes');
    if (savedWishes) {
      setWishes(JSON.parse(savedWishes));
    }
  }, []);

  // Update localStorage whenever wishes change
  useEffect(() => {
    localStorage.setItem('wedding_wishes', JSON.stringify(wishes));
  }, [wishes]);

  // Auto-slide wishes
  useEffect(() => {
    if (wishes.length > 0) {
      const timer = setInterval(() => {
        setCurrentWishIndex((prevIndex) => (prevIndex + 1) % wishes.length);
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [wishes.length]);

  // Handle adding a new wish
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newWish.name && newWish.message) {
      const updatedWishes = [
        ...wishes,
        { ...newWish, timestamp: new Date().toISOString() }
      ];
      setWishes(updatedWishes);
      localStorage.setItem('wedding_wishes', JSON.stringify(updatedWishes));
      setNewWish({ name: '', message: '' });
    }
  };


  const handleDelete = (index: number) => {
    const updatedWishes = wishes.filter((_, i) => i !== index);
    setWishes(updatedWishes);
    localStorage.setItem('wedding_wishes', JSON.stringify(updatedWishes));
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-12">Wedding Wishes</h2>

        {/* Wish Form */}
        <form onSubmit={handleSubmit} className="mb-12">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={newWish.name}
              onChange={(e) => setNewWish({ ...newWish, name: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              placeholder="Write your wishes for the couple..."
              value={newWish.message}
              onChange={(e) => setNewWish({ ...newWish, message: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 h-32"
            />
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 px-6 rounded-lg hover:bg-pink-600 transition-colors"
            >
              Send Wishes
            </button>
          </div>
        </form>

        <div className="relative min-h-[200px]">
          {wishes.length > 0 && (
            <div className="relative bg-white p-8 rounded-lg shadow-lg">
              <Heart className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 text-pink-500 beating-heart" />
              {wishes.map((wish, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-1000 absolute inset-0 p-8 ${
                    index === currentWishIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="text-center">
                    <h3 className="font-semibold text-xl text-pink-600 mb-2">{wish.name}</h3>
                    <p className="text-gray-600 italic">"{wish.message}"</p>
                    <span className="text-sm text-gray-500 block mt-4">
                      {new Date(wish.timestamp).toLocaleDateString()}
                    </span>
                    <button
                      onClick={() => handleDelete(index)}
                      className="mt-4 text-red-500 hover:text-red-700 transition-colors flex items-center justify-center mx-auto"
                    >
                      <Trash className="w-5 h-5 mr-1" /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
