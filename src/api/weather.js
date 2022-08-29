import axios from "axios";

const URL = "https://openweathermap.org/data/2.5/weather";
const API_key = "88770383aedf0d42f7cc2fd54baa356b";
export const fetchWeather = async () => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_key,
        }
    });
    return data;
}