import { getWeather } from '../helpers/getWeather'
import { useWeatherStore } from '../stores/weatherStore'

export const useWeather = async () => {
    const temperatura = await getWeather()
    const weatherStore = useWeatherStore()
    weatherStore.temperatura = temperatura
}