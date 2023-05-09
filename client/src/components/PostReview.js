function PostReview({content, setContent, onAddReview}) {

    function handleSubmit(e) {
        e.preventDefault(e);
        const newReview = {
            content: content
        }
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newReview),
        })
        .then(resp => resp.json()).then(newReview => onAddReview(newReview));

        setContent(""); //refresh input fields after submitting form
    }

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <h3>Review Us!</h3>
            <p>Create an account with Stix to post a review and enjoy varies discounts!</p>
            <textarea className="review-box" type="textbox" name="content" onChange={(e) => setContent(e.target.value)} value={content} />
            <br />
            <button type="submit" className="contact-btn">POST</button>
        </form>
    )
}
export default PostReview;