import React from 'react'
import Profile from './components/Profile'
import { useParams } from 'react-router-dom';
import Aside from '../homepage/components/aside/Aside';
import UserPostsPage from '../userPosts/UserPostsPage';


function ProfilePage() {
  const { userId } = useParams();
    console.log( userId);
  return (
    <>
    <Profile />
    {/* <UserPostsPage /> */}
    </>
  )
}

export default ProfilePage;