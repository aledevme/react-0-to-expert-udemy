import axios from "axios"
import { GIPHYAPI } from "../utils/strings"
import { useEffect, useState } from "react"
import GifItem from "./GifItem"

const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHYAPI}&q=${category}&limit=20`
    const response = await axios.get(url)
    const gifs = response.data.data.map((gif) => {
        return {
            id: gif.id,
            url: gif.images.original.url,
            title: gif.title
        }
    })

    return gifs
}
const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    const getImages = async () => {
        const images = await getGifs(category)
        console.log(images)
        setImages(images)
    }

    useEffect(() => {
        getImages()
    }, [])

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map((image) => {
                        return (

                            <GifItem gif={image} />

                        )
                    })
                }
            </div>

        </>
    )
}

export default GifGrid