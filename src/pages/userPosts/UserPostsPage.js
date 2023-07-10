import React from 'react'
import Profile from './components/UserPosts'
import { useParams } from 'react-router-dom';
import Aside from '../homepage/components/aside/Aside';
import UserPost from './components/UserPosts';

function UserPostsPage() {
  const { userId } = useParams();
    console.log( userId);
  return (
    <>
    {/* <Aside /> */}
    <UserPost />
    </>
  )
}

export default UserPostsPage;