import { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";

function Review() {
    const [content, setContent] = useState("");
    const [reviewList, setReviewList] = useState([]);

    useEffect(() => {
        fetch('/reviews')
        .then(resp => resp.json())
        .then(setReviewList);
    }, []);

    const renderReviewList = reviewList.map(review => {
        return (
            <ReviewCard
                key={review.id}
                description={review.content}
                username={review.user.username}
            />
        )
    })
    
    function handleSubmit(e) {
        e.preventDefault(e);
        console.log("Hello")
    }

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <h3>Review Us!</h3>
            <p>Create an account with Stix to post a review and enjoy varies discounts!</p>
            <textarea className="review-box" type="textbox" name="content" onChange={(e) => setContent(e.target.value)} value={content} />
            <br />
            <button type="submit" className="contact-btn">POST</button>
            {renderReviewList}
        </form>
    )
}
export default Review;