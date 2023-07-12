import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreatePost } from '../../../api';

function NewPost() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const newPost = useSelector(state => console.log(state));
  // const { status, payload } = createPost || {};
  console.log('newPost', newPost);
  const dispatch = useDispatch();

   const handleCreatePost = () => {
    if (title.trim() !== '' && text.trim() !== '') {
      dispatch(actionCreatePost(title, text));
    }
  };

  return (
    <div>
      <label>
        Enter title
      <input type="text" value={title} onChange={e => {
          setTitle(e.target.value);
        }}/>
      
      </label>
      <label>
        Enter post-text
      <input type="text" value={text} onChange={e => {
          setText(e.target.value);
        }}/>
      </label>
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  )
}

export default NewPost;


