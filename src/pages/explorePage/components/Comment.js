
import './comments.scss';

function Comment({comment}) {
  return ( 
    <div className='comments-container'>
      <span className='comments-owner'>{comment.owner.login}</span> 
      <span>{comment.text}</span>
    </div>
   );
}

export default Comment;