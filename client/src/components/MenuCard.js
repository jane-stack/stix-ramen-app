
function MenuCard({item, onAddItem}) {
    const {image, name, price} = item;

    return (
        <li className="card">
            <div>
            <img src={image} alt={"ramen name"} />
            <h3>{name}</h3>
            <p>${price}</p>
            </div>
            <div>
            <button className="btn" onClick={() => onAddItem(item)}>Add to Cart</button>
            </div>
        </li>
    )
}

export default MenuCard;