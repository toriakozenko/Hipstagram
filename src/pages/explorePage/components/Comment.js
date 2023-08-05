import IconNoAvatar from '../../../assets/convertedIcons/IconNoAvatar';
import { API_URL } from '../../../constants/Api_Graphql';
import './comments.scss';

function Comment({comment}) {
  return ( 
    <div className='comments-container'>
      <div style={{display: 'flex', alignItems: 'center'}}>
        {comment.owner.avatar ? (<img className="comment-avatar" src={`${API_URL}/${comment?.owner?.avatar?.url}`} alt="avatar" />) : <IconNoAvatar />}
        <span className='comments-owner'>{comment.owner.login}</span> 
        <span>{comment.text}</span>
      </div>
      <span className="comments-date">{new Date(+comment.createdAt).toLocaleString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric'})}
      </span> 
    </div>
   );
}

export default Comment;