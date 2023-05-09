import MenuCard from "./MenuCard";

function MenuList({menuList}) {

    const renderMenuItem = menuList.map(item => {
        return (
            <MenuCard
                key={item.id}
                image={item.image}
                name={item.name}    
            />
        )
    })

    return (
        <ul className="cards">
            {renderMenuItem}
        </ul>
    )
}

export default MenuList;