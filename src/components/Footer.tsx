
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">RailRoute</h3>
            <p className="text-gray-600 mb-4">
              Making train travel simple, convenient, and worry-free with our customer-first approach.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-teal" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-teal">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal">Train Schedule</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal">PNR Status</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal">Cancellation & Refunds</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Travel Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-teal">Train Types</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal">Coach Layout</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal">Travel Insurance</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal">Holiday Packages</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal">International Trains</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-teal">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal">Site Map</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal">Customer Support</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2025 RailRoute. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-teal text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-teal text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-teal text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
