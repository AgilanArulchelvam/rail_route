
import React from 'react';
import { CalendarIcon, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

const Hero = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="relative bg-lightGray min-h-[90vh] md:min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
          Book Your Train Journey <span className="text-teal">Effortlessly</span>
        </h1>
        <p className="text-gray-600 text-center md:max-w-2xl mb-10">
          Find and book train tickets for your next adventure with our simple and secure booking platform.
        </p>
        
        <div className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div className="flex-1">
              <label htmlFor="origin" className="block text-sm font-medium text-gray-700 mb-1">From</label>
              <Input
                id="origin"
                type="text"
                placeholder="Enter origin station"
                className="w-full rounded-lg border-gray-300 focus:border-teal focus:ring-teal"
              />
            </div>
            
            <div className="hidden md:flex items-center justify-center self-end mb-2">
              <ArrowRight className="h-5 w-5 text-gray-400" />
            </div>
            
            <div className="flex-1">
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">To</label>
              <Input
                id="destination"
                type="text"
                placeholder="Enter destination station"
                className="w-full rounded-lg border-gray-300 focus:border-teal focus:ring-teal"
              />
            </div>
            
            <div className="w-full md:w-48">
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Select a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="w-full md:w-auto md:self-end">
              <Button 
                className="w-full md:w-auto bg-coral hover:bg-coral/90 text-white" 
                size="lg"
              >
                Search Trains
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
