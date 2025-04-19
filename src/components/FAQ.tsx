
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How far in advance can I book train tickets?",
      answer: "Regular train tickets can be booked up to 120 days in advance. Tatkal tickets are available for booking 24 hours before the scheduled departure of the train."
    },
    {
      question: "What is the refund policy for cancelled tickets?",
      answer: "Refund amounts vary based on when you cancel your ticket. Cancellations made more than 48 hours before departure usually receive a higher refund percentage. Detailed policy information is provided during the booking process."
    },
    {
      question: "How can I check my PNR status?",
      answer: "You can check your PNR status by entering your 10-digit PNR number in the 'PNR Status' section on our website or mobile app. You'll receive information about your booking status, coach, and seat details."
    },
    {
      question: "Can I change the passenger name on a confirmed ticket?",
      answer: "No, passenger names cannot be changed on confirmed tickets as per railway regulations. You would need to cancel the current ticket and book a new one with the correct passenger details."
    },
    {
      question: "What identification documents are required during train travel?",
      answer: "Passengers must carry a valid government-issued photo ID proof such as Aadhaar Card, Passport, Driving License, Voter ID, PAN Card, or any other valid ID issued by the government."
    },
    {
      question: "How do I add a child to my booking?",
      answer: "During the booking process, you can add children to your ticket. Children under 5 years travel free (without a seat), while those aged 5-12 years are eligible for a discounted fare with a separate seat allocation."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about booking and traveling by train.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
