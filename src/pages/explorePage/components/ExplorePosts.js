import { CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionAllPosts } from '../../../api/posts.js';
import PostSmall from './PostSmall.js';
import './style.scss';

function ExplorePosts() {
    const posts = useSelector(state => state.promise.posts);
    const { status, payload } = posts || {};
    const dispatch = useDispatch();

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
      payload.map((item, index) => <PostSmall key={index} post={item}/>)
    }
    </ul>
    </div>)
  )
}

export default ExplorePosts;