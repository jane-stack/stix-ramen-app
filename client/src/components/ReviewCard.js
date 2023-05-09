import { useContext } from "react";
import { UserContext } from "./User";

function ReviewCard({review, description, username, created, onDeleteReview}) {
    const {id} = review;
    const {loggedIn} = useContext(UserContext);

    function handleDeleteClick() {
        fetch(`/reviews/${id}`, {
            method: "DELETE",
        });
        onDeleteReview(id);
    }

    if (loggedIn) {
        return (
            <div className="box">
                <h5>{username}</h5>
                <p>{created}</p>
                <p>{description}</p>
                <div className="delete-btn-div">
                    <button className="delete-btn" onClick={handleDeleteClick}>✘</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="box">
                <h5>{username}</h5>
                <p>{created}</p>
                <p>{description}</p>
            </div>
        )
    }
}

export default ReviewCard;