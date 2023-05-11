import { useContext } from "react";
import { UserContext } from "../components/User";

function Home() {
    const { user, loggedIn } = useContext(UserContext)

    if (loggedIn) {
        return (
            <div>
            <div className="welcome">Welcome {user.username}!</div>
            <br/>
            <img src="https://www.brandingidentitydesign.com/wp-content/uploads/2016/12/Restaurant-Interiors-01-700x466.jpg"/>
            </div>
        )
    } else {
        return (
            <div>
            <br/>
            <img src="https://www.brandingidentitydesign.com/wp-content/uploads/2016/12/Restaurant-Interiors-01-700x466.jpg"/>
            </div>
        )
    }
}
export default Home;