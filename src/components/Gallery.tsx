
import  { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Daksh1 from "../Assets/Daksh1.jpeg";
import Daksh2 from "../Assets/Daksh2.jpeg";
import Daksh3 from "../Assets/Daksh3.jpeg";
import Daksh4 from "../Assets/Daksh4.jpeg";
import Daksh5 from "../Assets/Daksh5.jpeg";
import ethnic1 from "../Assets/ethnic1.jpeg";
import ethnic2 from "../Assets/ethnic2.jpeg";
import ethnic4 from "../Assets/ethnic4.jpeg";
import ethnic8 from "../Assets/ethnic8.jpeg";
import ethnic11 from "../Assets/ethnic11.jpeg";
import ethnic12 from "../Assets/ethnic12.jpeg";
import gown1 from "../Assets/gown1.jpeg";
import gown2 from "../Assets/gown2.jpeg";
import gown3 from "../Assets/gown3.jpeg";
import image8 from "../Assets/image 8.jpeg";
import image3 from "../Assets/image3.jpeg";
import whiteimage18 from "../Assets/white image 18.jpeg";
import whiteimage from "../Assets/white image.jpeg";
import whiteimage11 from "../Assets/white image11.jpeg";
import whiteimage20 from "../Assets/white image20.jpeg";
import whiteimage12 from "../Assets/white image12.jpeg";

const images = [
  Daksh1,
  Daksh2,
  Daksh3,
  Daksh4,
  Daksh5,
  ethnic1,
  ethnic2,
  ethnic4,
  ethnic8,
  ethnic11,
  ethnic12,
  whiteimage18,
  whiteimage,
  gown1,
  gown2,
  gown3,
  image8,
  image3,
  whiteimage11,
  whiteimage20,
  whiteimage12
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-serif text-center mb-12">Our Memories</h2>
        <div className="relative w-full h-[60vh] sm:h-[60vh] md:h-[1000px] rounded-lg overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
        <div className="modal fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center" onClick={() => setSelectedImage(null)}>
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
