
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
          Two strangers, bound by family ties, discover unexpected companionship. Through shared laughter, late-night talks, and small acts of care, their arranged marriage blossoms into a love story neither saw coming—a bond stronger than fate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
