const GifItem = ({ gif }) => {
    return (
        <div className="card">
            <img src={gif.url} />
            <p>{gif.title}</p>
        </div>
    )
}

export default GifItem