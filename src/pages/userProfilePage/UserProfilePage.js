import { useParams } from 'react-router-dom';
import UserProfile from './components/UserProfile'

function UserProfilePage() {
  const { userId } = useParams();
  return (
    <UserProfile />
  )
}

export default UserProfilePage;