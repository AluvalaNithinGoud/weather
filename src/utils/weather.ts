import { WEATHER_API } from '../config/api';

export async function getCoordinates(city: string) {
  const response = await fetch(
    `${WEATHER_API.GEOCODING_URL}?q=${city}&limit=1&appid=${WEATHER_API.KEY}`
  );
  const data = await response.json();
  if (!data.length) throw new Error('City not found');
  return data[0];
}

export async function getWeatherData(lat: number, lon: number) {
  const response = await fetch(
    `${WEATHER_API.BASE_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_API.KEY}&units=metric`
  );
  if (!response.ok) throw new Error('Weather data not available');
  return response.json();
}