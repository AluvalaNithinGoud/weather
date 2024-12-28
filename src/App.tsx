import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { PopularCities } from './components/PopularCities';
import { WeatherData } from './types/weather';
import { getCoordinates, getWeatherData } from './utils/weather';

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>('');

  const fetchWeather = async (city: string) => {
    try {
      setError('');
      const coords = await getCoordinates(city);
      const data = await getWeatherData(coords.lat, coords.lon);
      setWeather(data);
    } catch (err) {
      setError('Could not find weather data for this city');
      setWeather(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Weather Dashboard
          </h1>
          <p className="mt-2 text-gray-600">Check the weather in your city</p>
        </div>

        <SearchBar onSearch={fetchWeather} />

        <PopularCities onCitySelect={fetchWeather} />

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg text-center">
            {error}
          </div>
        )}

        {weather && <WeatherCard data={weather} />}
      </div>
    </div>
  );
}

export default App;
