import { API_URL } from "../../../constants/Api_Graphql";
import postSettings from '../../../assets/images/icons/HomePage/post-settings.svg';
import iconComment from '../../../assets/images/icons/HomePage/icon-comment.svg';
import iconShare from '../../../assets/images/icons/HomePage/icon-share.svg';
import iconLike from '../../../assets/images/icons/HomePage/icon-like.svg';
import likeClicked from '../../../assets/images/icons/HomePage/likeClicked.svg';
import noImagePhoto from '../../../assets/images/icons/HomePage/no-image.png';
import noAvatarPhoto from '../../../assets/images/icons/HomePage/no-avatar.svg';
import CommentsList from "./CommentsList";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { actionCreateLike } from "../../../api/likes";
import { useState } from "react";




function PostSmall({post}) {
	const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes.length);
	const dispatch = useDispatch();

	const navigate = useNavigate();
	function navigateToProfile(id) {
		navigate(`/users/${id}`);
	}

	const userId = useSelector(state => state?.auth?.payload?.sub?.id);

	const handleCreateLike = () => {
		const likedByUser = post.likes.some(like => like.owner._id === userId);

		if (!likedByUser && !isLiked) { 
			dispatch(actionCreateLike(post._id));
			setLikeCount(likeCount => likeCount + 1);
			setIsLiked(true);
		}
	};


  return (
    <li className="post-card" >
			<div className="info">
				<div className="left-content" onClick={() => navigateToProfile(post.owner._id)}>
					{post.owner.avatar ? (<img className="avatar" src={`${API_URL}/${post?.owner?.avatar?.url}`} alt="avatar" />) : (<img className="avatar" src={noAvatarPhoto} alt="no avatar" />)}
					<span>{post.owner.login}</span>
					<span className="post-date">{new Date(+post.createdAt).toLocaleString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric'})}
					</span> 
				</div>
				<img src={postSettings} className="edit" alt="post-setting"/> 
			</div>

			<div className='photo-container'>
				{post.images && post.images.length ? (
					<>
						{post.images.map((image) => (
							<img className="post-image"
								src={`${image?.url !== null && image?.url !== "null" ? `${API_URL}/${image?.url}` : noImagePhoto}`}
								alt={image?.url !== null && image?.url !== "null" ? "post" : "no post"}
								key={image._id}
							/>
						))}
					</>) : (<img className="post-image" src={noImagePhoto} alt="no post"/>
				)}
			</div>


			<div className="post-actions">
				<div className="reaction-wrapper">

				<div onClick={handleCreateLike}>
            {!isLiked ? <img src={iconLike} alt="icon-like" /> : <img src={likeClicked} alt="icon-like" />}
          </div>

					<img src={iconComment} alt="icon-comment"/>
					<img src={iconShare} alt="icon-share"/>
				</div>

				<div className='likes'>
					<span>{likeCount} likes</span>
				</div>

				<div className='post-text'>
					<div className="post-text-wrapper">
						<span className="post-owner">{post.owner.login}</span>
						<span>{post.title}</span>
					</div>
					<p> {post.text}</p>
				</div>
			</div>

			<div className="comments">
				<CommentsList comments={post.comments} />
			</div>

    </li>
   );
}

export default PostSmall;