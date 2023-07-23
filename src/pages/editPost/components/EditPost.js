import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { actionEditPost } from '../../../api/posts';
import FilesUploader from '../../createNewPost/components/FilesUploader';

function EditPost() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const location = useLocation();
  const postId = location?.state || null;
  const navigate = useNavigate();
  const userId = useSelector(state => state?.auth?.payload?.sub?.id);

 const dispatch = useDispatch();


 const handleFileUpload = (id, url) => {
  setUploadedFiles((prevUploadedFiles) => [
    ...prevUploadedFiles,
    { id, url },
  ]);
};

const handleEditPost = () => {
  if (title.trim() !== '' && text.trim() !== ''  && uploadedFiles.length > 0) {
    const files = uploadedFiles.map(({ id }) => ({ _id: id }));
    dispatch(actionEditPost(postId, title, text, files ));
    navigate(`/profile/${userId}`); 
  }
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
      <button onClick={handleEditPost}>Submit</button>
    </div>
    </div>
    </div>
  )
}

export default EditPost;