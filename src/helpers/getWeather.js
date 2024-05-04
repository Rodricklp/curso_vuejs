import axios from "axios"

const API_URL = "https://api.open-meteo.com/v1/forecast?latitude=-16.5&longitude=-68.15&hourly=temperature_2m&timezone=auto"

export const getTemperatura = async () => {
    const response = await axios.get(API_URL)
    const responseTemperatura = response.data.hourly.temperature_2m[0]
    return responseTemperatura
}