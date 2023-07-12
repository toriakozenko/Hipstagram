import React from 'react'
import Profile from './components/UserPosts'
import { useParams } from 'react-router-dom';
import UserPosts from './components/UserPosts';

function UserPostsPage() {
  const { userLogin } = useParams();
    console.log( userLogin);
  return (
    <UserPosts />
  )
}

export default UserPostsPage;