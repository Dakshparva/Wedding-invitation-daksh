import { MapPin, Clock, Calendar } from 'lucide-react';

export default function Venue() {
  // Google Maps Directions URL for the wedding venue
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=12.298557587958385,76.67867267506517`;

  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-12">Venue & Details</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Venue Details Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-pink-500" />
              <div>
                <h3 className="font-semibold">Wedding Venue</h3>
                <p className="text-gray-600">Nikitha Bojegowda Marriage Hall</p>
                <p className="text-gray-600">3/4, KC Layout, Mysuru, Karnataka-570011</p>
                {/* Link to Directions */}
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-600 underline mt-2 inline-block"
                >
                  Get Directions
                </a>
              </div>
            </div>
            {/* Date Section */}
            <div className="flex items-center space-x-4">
              <Calendar className="w-6 h-6 text-pink-500" />
              <div>
                <h3 className="font-semibold">Date</h3>
                <p className="text-gray-600">February 23, 2025</p>
              </div>
            </div>
            {/* Time Section */}
            <div className="flex items-center space-x-4">
              <Clock className="w-6 h-6 text-pink-500" />
              <div>
                <h3 className="font-semibold">Time</h3>
                <p className="text-gray-600">Ceremony: 2:00 PM</p>
                <p className="text-gray-600">Reception: 7:00 PM</p>
              </div>
            </div>
          </div>
          {/* Google Maps Embed Section */}
          <div className="rounded-lg overflow-hidden shadow-lg h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.255728875264!2d76.67648367506519!3d12.298555587958384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70123e470f6d%3A0x2345abcdef123456!2sNikitha%20Bojegowda%20Marriage%20Hall!5e0!3m2!1sen!2sin!4v1733122233942!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Wedding Venue Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
