import './comments.scss';

function Comment({comment}) {
  // const dispatch = useDispatch();
  // const handleDeleteComment = () => {
	// 	dispatch(actionCommentDelete(comment._id))
  // }
  return ( 
    <div className='comments-container'>
      <span className='comments-owner'>{comment.owner.login}</span> 
      <span>{comment.text}</span>
      {/* <button onClick={handleDeleteComment}>delete</button> */}
    </div>
   );
}

export default Comment;