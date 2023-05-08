import { useContext } from "react";
import { UserContext } from "../components/User";

function Home() {
    const { user, loggedIn } = useContext(UserContext)

    if (loggedIn) {
        return (
            <div className="homepage">
                <h3 className="welcome">Welcome Back {user.username}!</h3>
            </div>
        )
    }
}
export default Home;