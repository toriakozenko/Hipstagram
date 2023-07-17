import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreatePost } from '../../../api/posts';
import FilesUploader from './FilesUploader';
import './newPost.scss';

function NewPost() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [fileUrl, setFileUrl] = useState("");
  const [fileId, setFileId] = useState('');
  
  const createPost = useSelector(state => state.promise.createPost);
  const { status, payload } = createPost || {};
  
  const dispatch = useDispatch();

  const handleCreatePost = () => {
    if (title.trim() !== '' && text.trim() !== '' && fileId && fileUrl) {
      dispatch(actionCreatePost(title, text, fileId, fileUrl));
    }
  };

  const handleFileUpload = (id, url) => {
    setFileId(id);
    setFileUrl(url);
  };

  return (
    <div className='newPost-wrapper'>
      <div className='newPost-container'> 
      <h2>Create new post</h2>

       <FilesUploader onFileUpload={handleFileUpload} />
       
    <div className='input-wrapper'>
      <input placeholder='Write a caption...' type="text" value={title} onChange={e => {
          setTitle(e.target.value);
          setTitle('');
        }}/>
      
      <input placeholder='Write a post text...' type="text" value={text} onChange={e => {
          setText(e.target.value);
          setText('');
        }}/>
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
    </div>
    </div>
  )
}

export default NewPost;


