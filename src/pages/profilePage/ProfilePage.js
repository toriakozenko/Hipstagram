import React from 'react'
import Profile from './components/Profile'
import { useParams } from 'react-router-dom';
import Aside from '../homepage/components/aside/Aside';


function ProfilePage() {
  const { userId } = useParams();
   
  return (
    <>
    <Profile />
    </>
  )
}

export default ProfilePage;