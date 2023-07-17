import { useParams } from 'react-router-dom';
import Profile from './components/Profile';

function ProfilePage() {
  const { userId } = useParams();
  return (
    <Profile />
  )
}

export default ProfilePage;