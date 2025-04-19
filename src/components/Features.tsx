
import React from 'react';
import { Check, ShieldCheck, RefreshCw, Phone } from 'lucide-react';

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-start transition-transform hover:translate-y-[-5px]">
    <div className="bg-lightGray p-3 rounded-lg mb-4">
      {icon}
    </div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-teal" />,
      title: "Secure UPI Payments",
      description: "Pay safely with your favorite UPI app for a hassle-free booking experience."
    },
    {
      icon: <Check className="h-6 w-6 text-teal" />,
      title: "Free Cancellations",
      description: "Change plans? Cancel your booking within 24 hours without any charges."
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-teal" />,
      title: "Live Status Tracking",
      description: "Get real-time updates about your train's location and arrival time."
    },
    {
      icon: <Phone className="h-6 w-6 text-teal" />,
      title: "24/7 Customer Support",
      description: "Our dedicated team is always available to assist with your queries."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why Choose <span className="text-teal">RailRoute</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We make train travel simple, convenient, and worry-free with our customer-first approach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
