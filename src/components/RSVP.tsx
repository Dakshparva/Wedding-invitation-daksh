import React, { useState } from 'react';

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guests: '1',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-12">RSVP</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              required
            />
          </div>
          <div>
            <label htmlFor="attending" className="block text-sm font-medium text-gray-700">Will you be attending?</label>
            <select
              id="attending"
              value={formData.attending}
              onChange={(e) => setFormData({...formData, attending: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            >
              <option value="yes">Yes, I will attend</option>
              <option value="no">No, I cannot attend</option>
            </select>
          </div>
          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Number of Guests</label>
            <select
              id="guests"
              value={formData.guests}
              onChange={(e) => setFormData({...formData, guests: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            >
              {[1,2,3,4].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message for the Couple</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 px-6 rounded-md hover:bg-pink-600 transition-colors"
            >
              Send RSVP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}