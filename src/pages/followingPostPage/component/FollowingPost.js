import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionAllFollowingPosts } from "../../../api/posts";
import { actionUserProfile } from "../../../api/users";
import PostSmall from "../../explorePage/components/PostSmall";
import './style.scss';


function FollowingPost() {
  const dispatch = useDispatch();

  const localStorageId = useSelector(state => state?.auth?.payload?.sub?.id);
  const allFollowingPosts = useSelector(state => state?.promise?.allFollowingPosts);

  
  useEffect(()=>{
    async function fetchData() {
      const data = await dispatch(actionUserProfile(localStorageId));
      const following = data?.following?.map(item=>(item._id));
      dispatch(actionAllFollowingPosts(JSON.stringify(following)))

    }
    
    fetchData()
  

  },[dispatch, localStorageId])

  return (
    <div className="following-posts">
      <ul className='post-container'> {
       allFollowingPosts?.payload?.map((post, index)=><PostSmall post={post} key={index} />)}
      </ul>
    </div>
  )
}

export default FollowingPost;