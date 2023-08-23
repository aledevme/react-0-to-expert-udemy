import { useState } from "react"
import AddGift from "./components/addGif"
import GifGrid from "./components/GifGrid"

export const App = () => {
    const [categories, setCategories] = useState(['One punch'])

    const onAddCategory = (value) => {
        if (categories.includes(value)) {
            return
        }
        setCategories([...categories, value])
    }

    return (
        <>
            <AddGift onAddCategory={onAddCategory} />
            <ol>
                {
                    categories.map((category, index) => {
                        return <GifGrid
                            key={index}
                            category={category}
                        />
                    })
                }
            </ol>

        </>
    )
}