import MenuCard from "./MenuCard";

function MenuList({menuList, onAddItem, onRemoveItem}) {

    const renderMenuItem = menuList.map(item => {
        return (
            <MenuCard
                key={item.id}
                image={item.image}
                name={item.name}
                price={item.price} 
                item={item}
                onAddItem={onAddItem}
                onRemoveItem={onRemoveItem}
            />
        )
    })

    return (
        <ul className="block col-2">
            <h2>Our Ramens</h2>
            <div className="cards">
            {renderMenuItem}
            </div>
        </ul>
    )
}

export default MenuList;