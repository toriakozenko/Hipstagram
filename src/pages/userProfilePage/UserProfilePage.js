import React from 'react';
import { useParams } from 'react-router-dom';
import UserProfile from './components/userProfile';


function UserProfilePage() {
  const { userId } = useParams();
   
  return (
    <>
    <UserProfile />
    </>
  )
}

export default UserProfilePage;