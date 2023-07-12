import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreatePost } from '../../../api';

function NewPost() {
  
  const newPost = useSelector(state => console.log(state));
  // const { status, payload } = createPost || {};
  console.log('newPost', newPost);
  const dispatch = useDispatch();

  useEffect(()=>{
      // dispatch(actionCreatePost())
  }, [dispatch]);

  return (
    <div>
      <label>
        Enter title
      <input type="text" />
      </label>
      <label>
        Enter post-text
      <input type="text" />
      </label>
    </div>
  )
}

export default NewPost;