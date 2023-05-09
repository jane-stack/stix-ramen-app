import { useContext } from "react";
import { UserContext } from "../components/User";

function Home() {
    const { user, loggedIn } = useContext(UserContext)

    if (loggedIn) {
        return (
            <div>
            <div className="welcome">Welcome {user.username}!</div>
            <br/>
                <div className="homepage">
                    <h3>IMAGE GOES HERE</h3>
                </div>
            </div>
        )
    } else {
        return (
            <div>
            <div className="welcome">Welcome Guest!</div>
            <br/>
                <div className="homepage">
                    <h3>IMAGE GOES HERE</h3>
                </div>
            </div>
        )
    }
}
export default Home;