import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { API_URL } from "../../../constants/Api_Graphql";
import noImagePhoto from '../../../assets/images/icons/HomePage/no-image.png';
import noAvatarPhoto from '../../../assets/images/icons/HomePage/no-avatar.svg';
// import './style.scss';
import { actionUserPosts } from "../../../api/posts";
import postSettings from '../../../assets/images/icons/HomePage/post-settings.svg';
import CommentsList from "../../explorePage/components/CommentsList";
import iconComment from '../../../assets/images/icons/HomePage/icon-comment.svg';
import iconShare from '../../../assets/images/icons/HomePage/icon-share.svg';
import iconLike from '../../../assets/images/icons/HomePage/icon-like.svg';
import PostSmall from "../../explorePage/components/PostSmall";

function UserPosts() {

  const { ownerId } = useParams();
  const dispatch = useDispatch();
  const userPosts = useSelector(state => state.promise.userPosts);
  const state = useSelector(state => state);
  console.log('state', state);
  const { status, payload } = userPosts || {};
  console.log('payload', payload)

  useEffect(() => {
    dispatch(actionUserPosts(ownerId))
}, [ownerId, dispatch]);

   

return (
 
  status === "PENDING" && payload ?
  <CircularProgress/>  : (<div style={{display: 'flex', justifyContent: 'center', width: '100%', height: '99vh',
  overflow: 'auto'}}>
  <ul className='post-container'> {
    payload &&
    payload.length &&
    payload.map(item => <PostSmall post={item}  key={item._id}/>)
  }
  </ul>
  </div>)
  
)
    
  


}

export default UserPosts;




// <li className="post-card">
      //   <div className="info">
      //     <div className="left-content">
      //       {post.owner.avatar ? (<img className="avatar" src={`${API_URL}/${post?.owner?.avatar?.url}`} alt="avatar" />) : (<img className="avatar" src={noAvatarPhoto} alt="no avatar" />)}
      //       <span>{post.owner.login}</span>
      //       <span className="post-date">{new Date(+post.createdAt).toLocaleString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric'})}
      //       </span> 
      //     </div>
      //     <img src={postSettings} className="edit" alt="post-setting"/> 
      //   </div>
        
      //   <div className='photo-container'>
      //   {post.images && post.images.length ? (
			// 		<>
			// 			{post.images.map((image) => (
			// 				<img className="post-image"
			// 					src={`${image?.url !== null && image?.url !== "null" ? `${API_URL}/${image?.url}` : noImagePhoto}`}
			// 					alt="post"
			// 					key={image._id}
			// 				/>
			// 			))}
			// 		</>) : (<img className="post-image" src={noImagePhoto} alt="post"/>
			// 	)}
      //   </div>


      //   <div className="post-actions">
			// 	<div className="reaction-wrapper">
			// 		<img src={iconLike} alt="icon-like"/>
			// 		<img src={iconComment} alt="icon-comment"/>
			// 		<img src={iconShare} alt="icon-share"/>
			// 	</div>

			// 	<div className='likes'>
			// 		<span>{post.likesCount ?? 0} likes</span> 
			// 	</div>

			// 	<div className='post-text'>
			// 		<div className="post-text-wrapper">
			// 			<span className="post-owner">{post.owner.login}</span>
			// 			<span>{post.title}</span>
			// 		</div>
			// 		<p> {post.text}</p>
			// 	</div>
			// </div>

			// <div className="comments">
			// 	<CommentsList comments={post.comments} />
			// </div>
      // </li>