import { useParams } from 'react-router-dom';
import EditPost from './components/EditPost';

function EditPostPage() {
  const { postId } = useParams();
  return (
    <EditPost />
  )
}

export default EditPostPage;