
import React from 'react';

const BookingStepCard = ({ 
  number, 
  title, 
  description 
}: { 
  number: number; 
  title: string; 
  description: string;
}) => (
  <div className="flex">
    <div className="flex-shrink-0 mr-4">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal text-white font-bold">
        {number}
      </div>
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const BookingTypes = () => (
  <div className="mb-12">
    <h3 className="text-xl font-semibold mb-4">Booking Types</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-lightGray p-6 rounded-lg">
        <h4 className="font-medium text-lg mb-2">General Booking</h4>
        <p className="text-gray-600">Standard tickets with confirmed seats available up to 120 days in advance. Perfect for planning trips ahead of time.</p>
      </div>
      <div className="bg-lightGray p-6 rounded-lg">
        <h4 className="font-medium text-lg mb-2">Tatkal Booking</h4>
        <p className="text-gray-600">Last-minute reservations available 24 hours before departure. Higher fares but ideal for emergency travel.</p>
      </div>
      <div className="bg-lightGray p-6 rounded-lg">
        <h4 className="font-medium text-lg mb-2">Premium Tatkal</h4>
        <p className="text-gray-600">Limited seats with dynamic pricing for immediate travel needs. Available online only with the fastest confirmation.</p>
      </div>
      <div className="bg-lightGray p-6 rounded-lg">
        <h4 className="font-medium text-lg mb-2">Senior Citizen</h4>
        <p className="text-gray-600">Discounted fares for senior citizens above 60 years. ID proof required during the journey.</p>
      </div>
    </div>
  </div>
);

const SupportedQuotas = () => (
  <div>
    <h3 className="text-xl font-semibold mb-4">Supported Quotas</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {[
        "General Quota (GN)",
        "Ladies Quota (LD)",
        "Tatkal Quota (TQ)",
        "Premium Tatkal (PT)",
        "Foreign Tourist Quota (FT)",
        "Duty Pass Quota (DP)",
        "Physically Handicapped Quota (HP)",
        "Parliament House Quota (PH)",
        "Lower Berth Quota (LB)"
      ].map((quota, index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-md p-3">
          <span className="text-gray-700">{quota}</span>
        </div>
      ))}
    </div>
  </div>
);

const BookingSteps = () => {
  const steps = [
    {
      number: 1,
      title: "Search for Trains",
      description: "Enter your origin, destination, and travel date to find available trains."
    },
    {
      number: 2,
      title: "Select Your Train & Coach",
      description: "Choose from available trains, select your preferred class and seat type."
    },
    {
      number: 3,
      title: "Enter Passenger Details",
      description: "Fill in passenger information and any special requirements."
    },
    {
      number: 4,
      title: "Make Payment",
      description: "Pay securely using UPI, credit/debit card, net banking, or wallets."
    }
  ];

  return (
    <section className="py-16 bg-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How to Book Your Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to book your train tickets in minutes.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step) => (
              <BookingStepCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <BookingTypes />
          <SupportedQuotas />
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;
