import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionUserPosts } from "../../../api/posts";
import { actionUserProfile } from "../../../api/users";
// import IconNoAvatar from "../../../assets/convertedIcons/IconNoAvatar";
import Face3Icon from '@mui/icons-material/Face3';
import { API_URL } from "../../../constants/Api_Graphql";
import PostSmall from "../../explorePage/components/PostSmall";
import './style.scss';

function Profile() {
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userId = useSelector(state => state?.auth?.payload?.sub?.id);
  const userProfile = useSelector(state => state?.promise?.userProfile);
  const { status, payload } = userProfile || {};

  const userPosts = useSelector(state => state?.promise?.userPosts);
  const { payload: posts } = userPosts || {};
  useEffect(() => {
    dispatch(actionUserProfile(userId));
    dispatch(actionUserPosts(userId));
  }, [userId, dispatch]);

  const handleFollowers = () => {
    setShowFollowers(true);
  };

  const handleCloseFollowers = () => {
    setShowFollowers(false);
  };

  const handleFollowing = () => {
    setShowFollowing(true);
  };

  const handleCloseFollowing = () => {
    setShowFollowing(false);
  };

  const handleEditProfile = () => {
		navigate('/editProfile');
  }

 
  return (
    (status === "undefined" || status === "PENDING" || !payload || !posts) ? <CircularProgress size={60} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  margin: 'auto', color: '#262626'}} />
    : 
    (
      payload ?
      <div className="profile-container">
        <div className="profile-wrapper">

          {payload.avatar && payload.avatar.url !== null ? (<img className="avatar" src={`${API_URL}/${payload?.avatar?.url}`} alt="avatar" />) : <Face3Icon />}
          
          <div className="profile-info-container">
            <div className="editing-block">
              <span>{payload.login !== ''  ? payload.login : 'anonim' }</span>
              <button onClick={handleEditProfile}>Edit Profile</button>
            </div>

            <div className="follow-container">
              {posts && posts.length ? (<span>{posts.length} posts</span>) : (<span>0 posts</span>)}
              <div className="followers-container">
                {payload.followers && payload.followers.length ? (<span onClick={handleFollowers}>{payload.followers.length} followers</span>) : <span>0 followers</span>}

                {showFollowers && (
                  <div className="popup-container">
                    <div className="popup-content">
                      <ul>
                      {payload?.followers !== null && payload?.followers?.length ? (payload.followers.map((item, index) => (
                          <li key={index}>{(item.login && item.login !== null ? <span>{item.login}</span> : <span>anonim</span>)}</li>
                        ))) : null}
                      </ul>
                    
                      <button onClick={handleCloseFollowers}>Close</button>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="following-container">
                {payload.following && payload.following.length ? (<span  onClick={handleFollowing}>{payload.following.length} following</span>) : <span>0 following</span>}

                {showFollowing && (
                  <div>
                    <div className="popup-content">
                      <ul>
                        {payload?.following !== null && payload?.following?.length ? (payload.following.map((item, index) => (
                          <li key={index}>{(item.login && item.login !== null ? <span>{item.login}</span> : <span>anonim</span>)}</li>
                        ))) : null}
                
                      </ul>
                      <button onClick={handleCloseFollowing}>Close</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="posts-container">
        
          <ul className='posts-list'> {
            posts &&
            posts.length > 0 ?
            (posts?.map((item, index) => <PostSmall key={index} post={item}/>)) : (<span>User haven't posts yet.</span>)
          }
          </ul>
        </div>
      </div> : null
    )
  )
}

export default Profile;
