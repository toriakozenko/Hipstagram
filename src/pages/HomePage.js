import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionAllPosts } from '../api/index.js';
// import { Link } from "react-router-dom";





const HomePage = () => {
  
    const posts = useSelector(state => state.promise.posts);
    console.log('posts', posts)
    const { status, payload } = posts || {};

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(actionAllPosts())
    }, [dispatch]);
    
  return (
    status === "FULFILLED" && payload ?
    <div>lala</div>  : 
    <div className="aside"> {
      payload &&
      payload.data &&
      payload.data.PostFind && 
      payload.data.PostFind.length &&
      payload.data.PostFind.map(item => (
          <div className="post-card" key={item._id}>
              <h3>{item._id}</h3>
              {/* <h3>{item.title}</h3>
              <h3>{item.text}</h3>
              <h3>{item.owner._id}</h3>
              {item.images && item.images.length ? <div> 
                  {item.images.map((image) => <img src={`${API_URL}/${image?.url}`} alt="post" />
                  )}
              </div> : null} */}
          </div>)
      )
  }
  </div>
  )
}

export default HomePage;