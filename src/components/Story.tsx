
import Daksh20 from "../Assets/Daksh20.jpg";

export default function Story() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-12">Our Love Story</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img 
              src={Daksh20}
              alt="Couple" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex items-center">
            <p className="text-gray-600 leading-relaxed">
              We first met at a local coffee shop on a rainy Sunday morning. What started as a chance encounter turned into hours of conversation, laughter, and an undeniable connection. Three years later, on that same rainy Sunday, Michael proposed at our favorite spot in Central Park. Every day since has been filled with more love than we could have ever imagined.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}