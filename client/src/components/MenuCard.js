function MenuCard({image, name}) {

    const addToCart = () => {
        console.log("added to cart")
    }

    return (
        <li className="card">
            <img src={image} alt={"ramen name"} />
            <h3>{name}</h3>
            <button className="btn" onClick={addToCart}>Add to Cart</button>
        </li>
    )
}

export default MenuCard;