function ReviewCard({description, username}) {
    
    return (
        <div className="box">
            <h5>{username}</h5>
            <p>{description}</p>
        </div>
    )
}

export default ReviewCard;