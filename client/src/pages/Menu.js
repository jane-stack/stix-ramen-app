import { useEffect, useState } from "react";
import MenuList from "../components/MenuList";
import Cart from "../pages/Cart"

function Menu() {
    const [menuList, setMenuList] = useState([]);
    const [cartItem, setCartItem] = useState([]);

    useEffect(() => {
        fetch('/menus')
        .then(resp => resp.json())
        .then(setMenuList)
    }, [])

    const onAddItem = (item) => {
        const exist = cartItem.find(x => x.id === item.id);
        if(exist) {
            setCartItem(
                cartItem.map((x) => 
                    x.id === item.id ? {...exist, qty: exist.qty +1 } : x
                )
            );
        } else {
            setCartItem([...cartItem, {...item, qty: 1}]);
        }
    };

    const onRemoveItem = (item) => {
        const exist = cartItem.find((x) => x.id === item.id);
        if(exist.qty === 1) {
            setCartItem(cartItem.filter((x) => x.id !== item.id));
        } else {
            setCartItem(
                cartItem.map((x) => 
                    x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            )
        }
    };

    return (
        <main >
            <div className="row">
            <MenuList 
                menuList={menuList}
                onAddItem={onAddItem}/>
            <Cart 
                cartItem={cartItem} 
                onAddItem={onAddItem}
                onRemoveItem={onRemoveItem}/>
            </div>
        </main>
    )
}
export default Menu;