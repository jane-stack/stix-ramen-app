function ReviewCard({description, username, created}) {
    
    return (
        <div className="box">
            <h5>{username}</h5>
            <p>{created}</p>
            <p>{description}</p>
            <div className="delete-btn-div">
            {/* <button className="delete-btn" onClick={handleDeleteClick}>✘</button> */}
            </div>
        </div>
    )
}

export default ReviewCard;