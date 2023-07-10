import React from 'react'
import { useParams } from 'react-router-dom';
import EditPost from './components/EditPost';

function EditPostPage() {
  const { postId } = useParams();
    console.log('postId', postId);
  return (
    <>
    <EditPost />
   
    </>
  )
}

export default EditPostPage;