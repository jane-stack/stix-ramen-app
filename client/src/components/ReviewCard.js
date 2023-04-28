function ReviewCard({description, username, created}) {
    
    return (
        <div className="box">
            <h5>{username}</h5>
            <p>{created}</p>
            <p>{description}</p>
        </div>
    )
}

export default ReviewCard;