import React from 'react';
import { MapPin } from 'lucide-react';

interface PopularCitiesProps {
  onCitySelect: (city: string) => void;
}

const cities = [
  { name: 'Hyderabad', country: 'India' },
  { name: 'Mumbai', country: 'India' },
  { name: 'Delhi', country: 'India' },
];

export function PopularCities({ onCitySelect }: PopularCitiesProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {cities.map((city) => (
        <button
          key={city.name}
          onClick={() => onCitySelect(city.name)}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <MapPin size={16} className="text-gray-500" />
          <span className="text-gray-700">{city.name}</span>
          <span className="text-xs text-gray-500">{city.country}</span>
        </button>
      ))}
    </div>
  );
}