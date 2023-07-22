import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreatePost } from '../../../api/posts';
import FilesUploader from './FilesUploader';
import './newPost.scss';

function NewPost() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);

const handleFileUpload = (id, url) => {
  setUploadedFiles((prevUploadedFiles) => [
    ...prevUploadedFiles,
    { id, url },
  ]);
};

  const dispatch = useDispatch();

  const handleCreatePost = () => {
    if (title.trim() !== '' && text.trim() !== '' && uploadedFiles.length > 0) {
      const files = uploadedFiles.map(({ id }) => ({ _id: id }));
      dispatch(actionCreatePost(title, text, files));
      console.log('title', title)
      console.log('text', text)
      console.log('files', files)
    }
  };

  return (
    <div className='newPost-wrapper'>
      <div className='newPost-container'> 
      <h2>Create new post</h2>

       <FilesUploader onFileUpload={handleFileUpload} />
       
    <div className='input-wrapper'>
      <input placeholder='Write a caption...' type="text" value={title} onChange={e => {
          setTitle(e.target.value);
        }}/>
      
      <input placeholder='Write a post text...' type="text" value={text} onChange={e => {
          setText(e.target.value);
        }}/>
      <button onClick={handleCreatePost}>Submit</button>
    </div>
    </div>
    </div>
  )
}

export default NewPost;


