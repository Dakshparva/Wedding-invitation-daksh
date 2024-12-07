import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Daksh1 from "../Assets/Daksh1.jpeg";
import Daksh2 from "../Assets/Daksh2.jpeg";
import Daksh3 from "../Assets/Daksh3.jpeg";
import Daksh4 from "../Assets/Daksh4.jpeg";
import Daksh5 from "../Assets/Daksh5.jpeg";
import Daksh6 from "../Assets/Daksh6.jpeg";
import Daksh7 from "../Assets/Daksh7.jpeg";
import Daksh8 from "../Assets/Daksh8.jpeg";
import Daksh9 from "../Assets/Daksh9.jpeg";
import Daksh10 from "../Assets/Daksh10.jpeg";
import Daksh11 from "../Assets/Daksh11.jpeg";
import Daksh12 from "../Assets/Daksh12.jpeg";


const images = [
  Daksh1,
  Daksh2,
  Daksh3,
  Daksh4,
  Daksh5,
  Daksh6,
  Daksh7,
  Daksh8,
  Daksh9,
  Daksh10,
  Daksh11,
  Daksh12,
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-12">Our Memories</h2>
        <div className="relative h-[1000px] rounded-lg overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 cursor-pointer ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Memory ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <button
            className="absolute top-4 right-4 text-white hover:text-pink-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}