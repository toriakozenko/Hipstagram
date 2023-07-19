import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { actionAllFollowingPosts } from "../../../api/posts";
import { actionUserProfile } from "../../../api/users";
import { POSTS_LIMIT } from "../../../constants/Posts_Limit";
import PostSmall from "../../explorePage/components/PostSmall";
import './style.scss';
import { actionAddPosts, actionSetPosts } from "../../../store/postsReducer";


function FollowingPost() {
  const [ skipPosts, setSkipPosts ] = useState(0);
  const dispatch = useDispatch();
  const userId = useSelector(state => state?.auth?.payload?.sub?.id);
  const posts = useSelector(state => state?.posts);
  console.log('posts', posts)
  const user = useSelector(state => state?.promise?.userProfile);

  
  useEffect(() => {
    async function fetchData() {
      const data = await dispatch(actionUserProfile(userId));
      const following = data?.following?.map(item => (item._id));
      const allPosts = await dispatch(actionAllFollowingPosts(JSON.stringify(following), skipPosts, POSTS_LIMIT));
      dispatch(actionSetPosts(allPosts));
    }
    fetchData()
  },[dispatch, userId])

  async function fetchMorePosts() {
    const following = user?.payload?.following?.map(item => (item._id));
    setSkipPosts(skip => skip + POSTS_LIMIT)
    const newPosts = await dispatch(actionAllFollowingPosts(JSON.stringify(following), skipPosts + POSTS_LIMIT, POSTS_LIMIT));
    dispatch(actionAddPosts(newPosts));

  }
  

  return (
    <div className="following-posts">
      <ul className='post-container'> 
        { posts?.length 
        ? 
            <InfiniteScroll
              dataLength={posts?.length}
              next={fetchMorePosts}
              hasMore={true}
              loader={<h4>Loading...</h4>}
            >
              {posts?.map((post, index)=><PostSmall post={post} key={index} />)}
            </InfiniteScroll>
        : null }
      </ul> 
    </div>
  )
}

export default FollowingPost;