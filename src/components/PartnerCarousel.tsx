
import React from 'react';

const PartnerCarousel = () => {
  // Duplicate the list of partners to create a seamless infinite scroll effect
  const partners = [
    { name: "Indian Railways", logo: "🚆" },
    { name: "PayTM", logo: "💳" },
    { name: "PhonePe", logo: "📱" },
    { name: "GooglePay", logo: "🔄" },
    { name: "MakeMyTrip", logo: "✈️" },
    { name: "Cleartrip", logo: "🌐" },
    { name: "IRCTC", logo: "🎫" },
    { name: "Yatra", logo: "🧳" },
  ];
  
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-12 bg-lightGray overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h3 className="text-xl font-semibold text-center mb-2">Our Trusted Partners</h3>
        <p className="text-gray-600 text-center mb-8">We collaborate with leading brands to enhance your travel experience</p>
      </div>
      
      <div className="relative">
        {/* This creates an auto-scrolling effect */}
        <div className="flex animate-carousel-scroll">
          {duplicatedPartners.map((partner, index) => (
            <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-sm h-24 w-36 flex flex-col items-center justify-center">
                <div className="text-3xl mb-2">{partner.logo}</div>
                <div className="text-sm font-medium text-gray-700">{partner.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerCarousel;
