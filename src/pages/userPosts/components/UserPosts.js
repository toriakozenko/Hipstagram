import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
// import './style.scss';
import { actionUserPosts } from "../../../api/posts";
import PostSmall from "../../explorePage/components/PostSmall";

function UserPosts() {

  const { ownerId } = useParams();
  const dispatch = useDispatch();
  const userPosts = useSelector(state => state.promise.userPosts);
  const state = useSelector(state => state);

  const { status, payload } = userPosts || {};


  useEffect(() => {
    dispatch(actionUserPosts(ownerId));
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



