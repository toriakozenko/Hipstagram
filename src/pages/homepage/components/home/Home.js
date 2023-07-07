import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionAllPosts } from '../../../../api/index.js';
import { CircularProgress } from '@mui/material';
import { API_URL } from '../../../../constants/Api_Graphql.js';
import postSettings from '../../../../assets/images/icons/HomePage/post-settings.svg';
import iconComment from '../../../../assets/images/icons/HomePage/icon-comment.svg';
import iconShare from '../../../../assets/images/icons/HomePage/icon-share.svg';
import iconLike from '../../../../assets/images/icons/HomePage/icon-like.svg';
import noImagePhoto from '../../../../assets/images/icons/HomePage/no-image.png';
import noAvatarPhoto from '../../../../assets/images/icons/HomePage/no-avatar.svg';
import './style.scss';




const Home = () => {
    const [showComments, setShowComments] = useState(false);

    function toggleComments() {
        setShowComments(!showComments);
    }
  
    const posts = useSelector(state => state.promise.posts);
    const { status, payload } = posts || {};
    console.log('posts', posts );
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(actionAllPosts())
    }, [dispatch]);

    
  return (
    status === "PENDING" && payload ?
    <CircularProgress/>  : 
    <div> {
      payload &&
      payload.length &&
      payload.map(item => (
        <div className='section-container'>
            <div className="post-card" key={item._id}>
                <div className='post-wrapper'>
                    <div className="info">
                        {item.owner.avatar ? (<img src={`${API_URL}/${item?.owner?.avatar?.url}`} alt="avatar" />) : (<img src={noAvatarPhoto} alt="no avatar" />)}
                        <p>{item.owner.login}</p>
                        <p className="post-time">{new Date(+item.createdAt).toLocaleString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric'})}
                        </p> 
                        <img src={postSettings} className="options" alt="post-setting"/> 
                    </div>

                    <div className='photo-container'>
                        {item.images && item.images.length ? <div> 
                        {item.images.map((image) => <img className="post-image" src={`${API_URL}/${image?.url}`} alt="post" key={image._id} />
                        )}
                        </div> : <img src={noImagePhoto} alt="no post" />} 
                    </div>
        
                    <div className="post-content">
                        <div className="reaction-wrapper">
                            <img src={iconLike} className="icon" alt="icon-like"/>
                            <img src={iconComment} className="icon" alt="icon-comment"/>

                            <img src={iconShare} className="icon" alt="icon-share"/>
                        </div>

                        <div className='likes'>
                            <p>{item.likesCount ?? 0} likes</p> 
                        </div>

                        <div className='post-text'>
                            <p className="post-owner">{item.owner.login}</p>
                            <p className='post-text'> {item.text}</p>
                        </div>
                    </div>

                    <div className="comment-wrapper">
                        <div>
                            
                        {item.comments && item.comments.length ? 
                        <div className='comment-box'> 
                            {item.comments.map(comment => (
                                <div className='comments'>
                                    <h3>{comment.owner.login}</h3> 
                                    <p>{comment.text}</p>
                                </div>
                            ))}
                        </div> : null}

                        <span onClick={toggleComments}>View all comments</span>
                        </div>
                        
                        
                        <div className='new-comment-wrapper'>
                        <input type="text" className="new-comment-box" placeholder="Add a comment..."/>
                        <button className="new-comment-btn">post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>))
    }
    </div>
  )
}

export default Home;