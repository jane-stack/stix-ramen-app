import { useEffect, useState } from "react";
import MenuList from "../components/MenuList";
import Cart from "../pages/Cart"

function Menu() {
    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        fetch('/menus')
        .then(resp => resp.json())
        .then(setMenuList)
    }, [])

    return (
        <main >
            <div className="row">
            <MenuList menuList={menuList}/>
            <Cart/>
            </div>
        </main>
    )
}
export default Menu;