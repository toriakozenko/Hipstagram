import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionEditPost } from '../../../api/posts';
import FilesUploader from '../../createNewPost/components/FilesUploader';

function EditPost({postId}) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [fileUrl, setFileUrl] = useState("");
  const [fileId, setFileId] = useState('');
  
  const editPost = useSelector(state => state.promise.editPost);
  const { status, payload } = editPost || {};

  const dispatch = useDispatch();

  const handleEditPost = () => {
    if (title.trim() !== '' && text.trim() !== '' && fileId && fileUrl) {
      dispatch(actionEditPost(title, text, fileId, fileUrl));
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
          setTitle('');
        }}/>
      
      <input placeholder='Write a post text...' type="text" value={text} onChange={e => {
          setText(e.target.value);
          setText('');
        }}/>
      <button onClick={handleEditPost}>Edit Post</button>
    </div>
    </div>
    </div>
  )
}

export default EditPost;


