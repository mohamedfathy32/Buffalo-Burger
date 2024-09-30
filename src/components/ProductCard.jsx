export default function ProductCard({ image, title, description, price }) {
    return (
        <>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="flex">
                <span>{price}</span>
                <button>
                    <span className="material-symbols-outlined">add_circle</span>
                </button>
            </div>
        </>
    )
}