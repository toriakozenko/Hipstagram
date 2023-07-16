import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { API_URL } from "../../../constants/Api_Graphql";
import noAvatarPhoto from '../../../assets/images/icons/HomePage/no-avatar.svg';
import './style.scss';
import { actionOneUser } from "../../../api/users";
import { actionUserPosts } from "../../../api/posts";
import PostSmall from "../../explorePage/components/PostSmall";
import { actionSubscribe } from "../../../api/follow";


function Profile() {
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  
  const { userId } = useParams();
  const dispatch = useDispatch();
  const oneUser = useSelector(state => state.promise.oneUser);
  const userPosts = useSelector(state => state.promise.userPosts);


  const localStorageId = useSelector(state => state?.auth?.payload?.sub?.id);
  const login = useSelector(state => state?.auth?.payload?.sub?.login);

  
  console.log('oneUser', oneUser);
  const { status, payload } = oneUser || {};

  const { payload: posts } = userPosts || {};

  useEffect(() => {
    dispatch(actionOneUser(userId));
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


  const handleSubscribe = () => {
    console.log('following');
    dispatch(actionSubscribe(login, userId))
  }




  return (
    status === "PENDING" || !payload ? <CircularProgress />
    : 
    (
      payload ?
      <div className="profile-container">
        <div className="profile-wrapper">

        {payload.avatar && payload.avatar.url !== null ? (<img className="avatar" src={`${API_URL}/${payload?.avatar?.url}`} alt="avatar" />) : (<img className="avatar" src={noAvatarPhoto} alt="no avatar" />)}
        

        <div className="profile-info-container">
          <div className="editing-block">
            <span>{payload.login !== ''  ? payload.login : 'anonim' }</span>

            {localStorageId !== payload._id ? (<button onClick={handleSubscribe}>Follow</button>) : (<button>Edit Profile</button>)}

          </div>

          <div className="follow-container">
            <div className="followers-container">
              {payload.followers && payload.followers.length ? (<span onClick={handleFollowers}>{payload.followers.length} followers</span>) : <span>0 followers</span>}

              {showFollowers && (
                <div className="popup-container">
                  <div className="popup-content">
                    <ul>
                      {payload?.followers !== null && payload?.followers?.length ? (
                        payload.followers.map((item, index) => (
                          <li key={index}>{item.login}</li>
                        ))
                      ) : null}
                    </ul>
                  
                    <button onClick={handleCloseFollowers}>Close</button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="following-container">
              {payload.following && payload.following.length ? (<span  onClick={handleFollowing}>{payload.following.length} following</span>) : <span>0 following</span>}

              {showFollowing && (
                <div className="popup-container">
                  <div className="popup-content">
                    <ul>
                      {payload?.following !== null && payload?.following?.length ? (payload.following.map((item, index) => (
                        <li key={index}>{item.login}</li>
                      ))) : (!payload.following === null || payload.following.length === 0) && null}
              
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
              posts.length &&
              posts.map(item => <PostSmall post={item}  key={item._id}/>)
            }
            </ul>
          </div>
        </div>  
        : null
    )
  
  )
}

export default Profile;
