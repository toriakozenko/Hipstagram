import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionEditPost } from '../../../api/posts';
import FilesUploader from '../../createNewPost/components/FilesUploader';
import { useLocation } from 'react-router-dom';

function EditPost() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [fileUrl, setFileUrl] = useState("");
  const [fileId, setFileId] = useState('');
  const location = useLocation();
  const postId = location?.state || null;

 const dispatch = useDispatch();

  const handleEditPost = () => {
    if (title.trim() !== '' && text.trim() !== '' && fileId && fileUrl) {
      dispatch(actionEditPost(postId, title, text, fileId, fileUrl));
    }
  };

  const handleFileUpload = (id, url) => {
    setFileId(id);
    setFileUrl(url);
  };

  return (
    <div className='newPost-wrapper'>
      <div className='newPost-container'> 
      <h2>Edit your post</h2>

       <FilesUploader onFileUpload={handleFileUpload} />
       
    <div className='input-wrapper'>
      <input placeholder='Write a caption...' type="text" value={title} onChange={e => {
          setTitle(e.target.value);
        }}/>
      
      <input placeholder='Write a post text...' type="text" value={text} onChange={e => {
          setText(e.target.value);
        }}/>
      <button onClick={handleEditPost}>Edit Post</button>
    </div>
    </div>
    </div>
  )
}

export default EditPost;


