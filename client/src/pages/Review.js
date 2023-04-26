import { useState } from "react";

function Review() {
    const [review, setReview] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault(e);
        console.log("Hello")
    }

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <h3>Review Us!</h3>
            <textarea className="review-box" type="textbox" name="review" onChange={(e) => setReview(e.target.value)} value={review} />
            <br />
            <button type="submit" className="contact-btn">POST</button>
        </form>
    )
}
export default Review;