import './comments.scss';

function Comment({comment}) {
  return ( 
    <div className='comments-container'>
      <div>
      <span className='comments-owner'>{comment.owner.login}</span> 
      <span>{comment.text}</span>
      </div>
    </div>
   );
}

export default Comment;