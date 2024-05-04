import axios from "axios"

const API_URL = "https://api.open-meteo.com/v1/forecast?latitude=-16.5&longitude=-68.15&current=temperature_2m&timezone=auto&forecast_days=1"

export const getTemperatura = async () => {
    const response = await axios.get(API_URL)
    const temperatura = response.data.current.temperature_2m
    return temperatura
}