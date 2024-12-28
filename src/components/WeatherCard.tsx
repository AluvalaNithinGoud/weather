import React from 'react';
import { Cloud, CloudRain, Sun, Snowflake, CloudLightning } from 'lucide-react';
import { format } from 'date-fns';
import { WeatherData } from '../types/weather';

interface WeatherCardProps {
  data: WeatherData;
}

const getWeatherIcon = (condition: string) => {
  switch (condition.toLowerCase()) {
    case 'clear':
      return <Sun className="w-16 h-16 text-yellow-400" />;
    case 'clouds':
      return <Cloud className="w-16 h-16 text-gray-400" />;
    case 'rain':
      return <CloudRain className="w-16 h-16 text-blue-400" />;
    case 'snow':
      return <Snowflake className="w-16 h-16 text-blue-200" />;
    case 'thunderstorm':
      return <CloudLightning className="w-16 h-16 text-purple-400" />;
    default:
      return <Sun className="w-16 h-16 text-yellow-400" />;
  }
};

const getBackgroundColor = (condition: string) => {
  switch (condition.toLowerCase()) {
    case 'clear':
      return 'bg-gradient-to-br from-blue-400 to-blue-300';
    case 'clouds':
      return 'bg-gradient-to-br from-gray-400 to-gray-300';
    case 'rain':
      return 'bg-gradient-to-br from-blue-600 to-blue-500';
    case 'snow':
      return 'bg-gradient-to-br from-blue-100 to-gray-100';
    case 'thunderstorm':
      return 'bg-gradient-to-br from-purple-600 to-purple-500';
    default:
      return 'bg-gradient-to-br from-blue-400 to-blue-300';
  }
};

export function WeatherCard({ data }: WeatherCardProps) {
  const weatherCondition = data.weather[0].main;
  const bgColor = getBackgroundColor(weatherCondition);
  const currentTime = format(new Date(), 'h:mm a');

  return (
    <div className={`rounded-xl p-6 text-white shadow-lg ${bgColor}`}>
      <div className="flex flex-col items-center space-y-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold">{data.name}, {data.sys.country}</h2>
          <p className="text-lg opacity-90">{currentTime}</p>
        </div>
        
        <div className="flex items-center justify-center">
          {getWeatherIcon(weatherCondition)}
        </div>
        
        <div className="text-center">
          <p className="text-5xl font-bold mb-2">
            {Math.round(data.main.temp)}°C
          </p>
          <p className="text-xl capitalize">{data.weather[0].description}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-sm opacity-75">Feels Like</p>
            <p className="text-lg font-semibold">{Math.round(data.main.feels_like)}°C</p>
          </div>
          <div>
            <p className="text-sm opacity-75">Humidity</p>
            <p className="text-lg font-semibold">{data.main.humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}