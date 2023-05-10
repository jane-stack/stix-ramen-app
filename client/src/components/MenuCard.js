
function MenuCard({image, name, price}) {

    const addToCart = () => {
        console.log("Added to Cart")

    }

    return (
        <li className="card">
            <img src={image} alt={"ramen name"} />
            <h3>{name}</h3>
            <p>${price}</p>
            <button className="btn" onClick={addToCart}>Add to Cart</button>
        </li>
    )
}

export default MenuCard;