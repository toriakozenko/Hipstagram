// import './style.scss';

// import post-settings from '../../assets/images/icons/HomePage/post-settings.svg';


const PostCard = () => {
	
	return (
		<>
		<section className="main">
    <div className="wrapper">
       
        <div className="post">

            <div className="info">
                <div className="user">
                    <div className="profile-pic">
                        {/* <img src={`${API_URL}/${item?.owner?.avatar?.url}`} alt="avatar" /> */}
                    </div>
                    {/* <p>'Owner' {item.owner.login}</p> */}
                </div>
                {/* <img src={post-settings} className="options" alt="post-setting"/> */}
                </div>

            {/* {item.images && item.images.length ? <div> 
                {item.images.map((image) => <img className="post-image" src={`${API_URL}/${image?.url}`} alt="post" key={image._id} />
                )}
            </div> : null} */}

            
            <div className="post-content">
                <div className="reaction-wrapper">
                    {/* <img src="img/like.PNG" className="icon" alt=""/> */}
                    {/* <img src="img/comment.PNG" className="icon" alt=""/>
                    <img src="img/send.PNG" className="icon" alt=""/>
                    <img src="img/save.PNG" className="save icon" alt=""/> */}
                </div>
                {/* <p className="likes">'likes count'{item.likesCount}</p> */}
                {/* <p className="description">'Owner' {item.owner.login} <h3>'text' {item.text}</h3></p>
                 */}

                 {/* <p className="post-time">{new Date(+item.createdAt).toLocaleString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric'})}
                </p> */}
            </div>

            <div className="comment-wrapper">
            {/* {item.comments && item.comments.length ? <div> 
                {item.comments.map((comments) => <h3>'comments'{comments?.text} {comments?.owner?.login}</h3> )}
            </div> : null} */}
                <input type="text" className="comment-box" placeholder="Add a comment"/>
                <button className="comment-btn">post</button>
            </div>
        </div>

    </div>
</section>
		</>
	)
}

export default PostCard;
