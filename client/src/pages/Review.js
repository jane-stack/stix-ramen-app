import { useEffect, useState } from "react";
import PostReview from "../components/PostReview";
import ReviewCard from "../components/ReviewCard";

function Review() {
    const [content, setContent] = useState("");
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/reviews')
        .then(resp => resp.json())
        .then(setReviews);
    }, []);

    const handleAddReview = (newReview) => {
        setReviews([...reviews, newReview]);
    }

    const handleDeleteReview = (id) => {
        const updatedReviews = reviews.filter(review => review.id !== id);
        setReviews(updatedReviews);
    }

    const renderReviewList = reviews.map(review => {
        return (
            <ReviewCard
                key={review.id}
                description={review.content}
                username={review.user.username}
                created={review.user.created_at}
                review={review}
                onDeleteReview={handleDeleteReview}
            />
        )
    })

    return (
        <div>
            <PostReview 
                content={content} 
                setContent={setContent}
                onAddReview={handleAddReview}
             />
            {renderReviewList}
        </div>
    )
}
export default Review;