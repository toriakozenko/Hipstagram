import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionCreateComment } from "../../../api/comment";
import { actionCreateLike } from "../../../api/likes";
import { actionPostDelete } from "../../../api/posts";
import iconComment from '../../../assets/images/icons/HomePage/icon-comment.svg';
import iconLike from '../../../assets/images/icons/HomePage/icon-like.svg';
import iconShare from '../../../assets/images/icons/HomePage/icon-share.svg';
import likeClicked from '../../../assets/images/icons/HomePage/likeClicked.svg';
import noAvatarPhoto from '../../../assets/images/icons/HomePage/no-avatar.svg';
import noImagePhoto from '../../../assets/images/icons/HomePage/no-image.png';
import { API_URL } from "../../../constants/Api_Graphql";
import CommentsList from "./CommentsList";
import PostCarousel from "./PostCarousel";

function PostSmall({post}) {
	const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes.length);
	const [comment, setComment] = useState('');
	const dispatch = useDispatch();
	const postOwnerId = post?.owner?._id;
	const navigate = useNavigate();
	function navigateToProfile(id) {
		navigate(`/users/${id}`);
	}
	const userId = useSelector(state => state?.auth?.payload?.sub?.id);
	
	useEffect(() => {
		const likedByUser = post.likes.some((like) => like.owner._id === userId);
		setIsLiked(likedByUser);
	}, [post.likes, userId]);

	const handleCreateLike = () => {
		const likedByUser = post.likes.some(like => like.owner._id === userId);

		if (!likedByUser && !isLiked) { 
			dispatch(actionCreateLike(post._id));
			setLikeCount(likeCount => likeCount + 1);
			setIsLiked(true);
		}
	};

	const handleEditPost = (id) => {
		if(postOwnerId === userId) {
			navigate('/editPost', {state: id});
		}
	}

	const handleCreateComment = () => {
		if (comment.trim() !== '') {
			dispatch(actionCreateComment(post._id, comment));
		}	
	};

  const handleDeletePost = () => {
		dispatch(actionPostDelete(post._id))
  }
  return (
		
    <li className="post-card" >
			
			<div className="info">
				<div className="left-content" onClick={() => navigateToProfile(post.owner._id)}>
					{post.owner.avatar ? (<img className="avatar" src={`${API_URL}/${post?.owner?.avatar?.url}`} alt="avatar" />) : (<img className="avatar" src={noAvatarPhoto} alt="no avatar" />)}
					<span>{post.owner.login}</span>
					<span className="post-date">{new Date(+post.createdAt).toLocaleString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric'})}
					</span> 
				</div>
				<div className="right-content">
					{postOwnerId === userId  ? (<button onClick={() => handleEditPost(post._id)}>Edit </button>) : null}
					{postOwnerId === userId  ? (<button onClick={handleDeletePost}>Delete</button>) : null}
				</div>
			</div>

			<div className='photo-container'>
				{post.images && post.images.length ? post.images.length === 1 ? ( <img className="post-image"
        src={`${post.images[0].url !== null && post.images[0].url !== "null" ? `${API_URL}/${post.images[0].url}` : {noImagePhoto}}`}
        alt="post" /> ) 
				: (
					<PostCarousel items={post.images} />
					)
				 : (<img className="post-image" src={noImagePhoto} alt="no post"/>
				)}
			</div>


			<div className="post-actions">
				<div className="reaction-wrapper">
					
				<div className="reaction-icon" onClick={handleCreateLike}>
            {isLiked ? <img src={likeClicked} alt="icon-like" /> : <img src={iconLike} alt="icon-like" />}
          </div>

				<div className="reaction-icon">
						<img src={iconComment} alt="icon-comment"/>
					</div>
					<div className="reaction-icon">
						<img src={iconShare} alt="icon-share"/>
					</div>
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

			<div className="comments-container">
			<div className="add-comment-container">
			<input placeholder='Add a comment...' type="text" value={comment} onChange={e => {
          setComment(e.target.value);
        }}/>
				<span>{post?.comments?.text}</span>
				<button onClick={handleCreateComment}>Post</button>
			</div>
				<CommentsList comments={post.comments} />
			</div>
    </li>
   );
}

export default PostSmall;