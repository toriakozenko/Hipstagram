import { useParams } from "react-router-dom";
import {  actionUserPosts } from "../../../api"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { API_URL } from "../../../constants/Api_Graphql";
import noImagePhoto from '../../../assets/images/icons/HomePage/no-image.png';
import noAvatarPhoto from '../../../assets/images/icons/HomePage/no-avatar.svg';
import './style.scss';


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
  status === "PENDING" || !payload ? 
    <CircularProgress />
   : 
   payload && payload.length  ?
    payload.map(post => 
      <div className="user-post-container">
        
        {post.images && post.images.length ? (
					<>
						{post.images.map((image) => (
							<img className="post-image"
								src={`${image?.url !== null && image?.url !== "null" ? `${API_URL}/${image?.url}` : noImagePhoto}`}
								alt="post"
								key={image._id}
							/>
						))}
					</>) : (<img className="post-image" src={noImagePhoto} alt="post"/>
				)}
      </div>
    ) : null
  
)
    
  


}

export default UserPosts;

