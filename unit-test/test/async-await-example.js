import axios from 'axios'
export const getImagen = async () => {
    try {
        const apiKey = '3IcaAaFTOS7dP8Fm8vWOqEyxTGDkL3Tz'
        const route = 'https://api.giphy.com/v1/gifs/random?api_key=' + apiKey + '&tag=&rating=g'

        const response = await axios.get(route)
        const { data } = response
        const url = data.data.url
        return url
    } catch (error) {
        console.log(error)
    }
}