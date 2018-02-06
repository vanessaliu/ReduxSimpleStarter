import axios from 'axios';

const API_KEY = 'db7076cb94361b7741dc773c96c64c45';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request =  axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}