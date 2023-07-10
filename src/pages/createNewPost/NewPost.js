import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreatePost } from '../../api';

function NewPost() {
  
  const newPost = useSelector(state => console.log(state));
  // const { status, payload } = createPost || {};
  console.log('newPost', newPost);
  const dispatch = useDispatch();

  useEffect(()=>{
      // dispatch(actionCreatePost())
  }, [dispatch]);

  return (
    <div>newPost</div>
  )
}

export default NewPost;