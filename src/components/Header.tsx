
import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold text-teal">RailRoute</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-teal transition-colors px-3 py-2 text-sm font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-teal transition-colors px-3 py-2 text-sm font-medium">Trains</a>
            <a href="#" className="text-gray-700 hover:text-teal transition-colors px-3 py-2 text-sm font-medium">Bookings</a>
            <a href="#" className="text-gray-700 hover:text-teal transition-colors px-3 py-2 text-sm font-medium">Contact</a>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center text-gray-700 hover:text-teal transition-colors px-3 py-2 text-sm font-medium">
                  More <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <a href="#" className="w-full">Special Offers</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#" className="w-full">Track Status</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#" className="w-full">Travel Advisory</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white pb-6 px-4">
          <div className="space-y-1">
            <a href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal hover:bg-gray-50 rounded-md">Home</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal hover:bg-gray-50 rounded-md">Trains</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal hover:bg-gray-50 rounded-md">Bookings</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal hover:bg-gray-50 rounded-md">Contact</a>
            
            <div className="pt-4 pb-3">
              <div className="px-3 text-xs uppercase tracking-wide font-medium text-gray-500">More Services</div>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal hover:bg-gray-50 rounded-md">Special Offers</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal hover:bg-gray-50 rounded-md">Track Status</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal hover:bg-gray-50 rounded-md">Travel Advisory</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
