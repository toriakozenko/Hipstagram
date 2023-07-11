import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionAllPosts } from '../../../api/index.js';
import { CircularProgress } from '@mui/material';
import './style.scss';
import PostSmall from './PostSmall.js';




const ExplorePosts = () => {
   
    const posts = useSelector(state => state.promise.posts);
    const { status, payload } = posts || {};
    const dispatch = useDispatch();
    console.log('posts', posts)

    useEffect(()=>{
        dispatch(actionAllPosts())
    }, [dispatch]);

    
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

export default ExplorePosts;