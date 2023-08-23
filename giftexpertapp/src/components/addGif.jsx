import { useState } from "react"

const AddGift = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState("")
    const onInputChange = ({ target: { value } }) => {
        setInputValue(value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        if (inputValue.trim().length <= 1) return
        onAddCategory(inputValue)
        setInputValue("")
    }
    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input value={inputValue} onChange={onInputChange} />
            <button>agregar</button>
        </form>
    )
}


export default AddGift