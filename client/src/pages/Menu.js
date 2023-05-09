import { useEffect, useState } from "react";
import MenuList from "../components/MenuList";

function Menu() {
    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        fetch('/menus')
        .then(resp => resp.json())
        .then(setMenuList)
    }, [])

    return (
        <main>
            <MenuList menuList={menuList}/>
        </main>
    )
}
export default Menu;