import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreatePost } from '../../../api/posts';
import FilesUploader from './FilesUploader';

function NewPost() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [fileUrl, setFileUrl] = useState("");
  const [fileId, setFileId] = useState('');
  
  const createPost = useSelector(state => state.promise.createPost);
  const { status, payload } = createPost || {};
  console.log('payload', payload);
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
    <div>
       <FilesUploader onFileUpload={handleFileUpload} />
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


