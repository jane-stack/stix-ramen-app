import { useContext } from "react";
import { UserContext } from "../components/User";

function Home() {
    const { user, loggedIn } = useContext(UserContext)

    if (loggedIn) {
        return (
            <div>
            <div className="welcome">Welcome {user.username}!</div>
            <br/>
            <img src="https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.jpg?s=612x612&w=0&k=20&c=EDqQ0oBcpFGV25p61vWUF5N-6lRJdbmZmQMe5kyuxyA="/>
            </div>
        )
    } else {
        return (
            <div>
            <br/>
            <img src="https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.jpg?s=612x612&w=0&k=20&c=EDqQ0oBcpFGV25p61vWUF5N-6lRJdbmZmQMe5kyuxyA="/>
            </div>
        )
    }
}
export default Home;