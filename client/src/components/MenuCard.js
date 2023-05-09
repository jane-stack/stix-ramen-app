function MenuCard({image, name}) {

    return (
        <li className="card">
            <img src={image} alt={"ramen name"} />
            <h3>{name}</h3>
        </li>
    )
}

export default MenuCard;