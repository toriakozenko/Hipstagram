import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionSubscribe } from "../../../api/follow";
import { actionUserPosts } from "../../../api/posts";
import { actionOneUser } from "../../../api/users";
import noAvatarPhoto from '../../../assets/images/icons/HomePage/no-avatar.svg';
import { API_URL } from "../../../constants/Api_Graphql";
import PostSmall from "../../explorePage/components/PostSmall";
import './style.scss';

function UserProfile() {
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
 


  const { userId } = useParams();
  const dispatch = useDispatch();

  const oneUser = useSelector(state => state.promise.oneUser);
  
  const userPosts = useSelector(state => state.promise.userPosts);

  const login = useSelector(state => state?.auth?.payload?.sub?.login);
  const id = useSelector(state => state?.auth?.payload?.sub?.id);

  const { status, payload } = oneUser || {};
  console.log('payload', payload)

  const [followerCount, setFollowerCount] = useState(payload?.followers?.filter(item => item.login !== undefined)?.length || 0);

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

  const followerLogin = payload?.followers.map(item => item.login);

  const handleSubscribe = () => {
   	dispatch(actionSubscribe(id, login, userId));
    setFollowerCount(followerCount => followerCount + 1);
	}

  return (
    status === "PENDING" || !payload ? <CircularProgress size={60} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  margin: 'auto', color: '#262626'}} />
    : 
    (
      payload ?
        <div className="profile-container">
          <div className="profile-wrapper">

            {payload.avatar && payload.avatar.url !== null ? (<img className="avatar" src={`${API_URL}/${payload?.avatar?.url}`} alt="avatar" />) : (<img className="avatar" src={noAvatarPhoto} alt="no avatar" />)}
            

            <div className="profile-info-container">
              <div className="editing-block">
                <span>{payload.login !== '' ? payload.login : 'anonim' }</span>
                <button onClick={handleSubscribe}>{followerLogin.includes(login) ? 'Unfollow' : 'Follow'}</button>
              </div>

              <div className="follow-container">
                <div className="followers-container">
                  {followerCount ? 
                    (<span onClick={handleFollowers}>{followerCount} followers</span>) :
                    (<span>0 followers</span>)
                  }
                  {showFollowers && (
                    <div className="popup-container">
                      <div className="popup-content">
                        <ul>
                          {payload?.followers !== null && payload?.followers?.length ? (payload.followers.map((item, index) => (
                              <li key={index}>{(item.login && item.login !== null ? <span>{item.login}</span> : <span>anonim</span>)}</li>
                            ))) : null
                          }
                        </ul>
                      
                        <button onClick={handleCloseFollowers}>Close</button>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="following-container">
                  {payload.following && payload.following.length ? 
                    (<span  onClick={handleFollowing}>{payload.following.length} following</span>) : 
                    <span>0 following</span>
                  }

                  {showFollowing && (
                    <div className="popup-container">
                      <div className="popup-content">
                        <ul>
                          {payload?.following !== null && payload?.following?.length ? 
                            (payload.following.map((item, index) => (
                              <li key={index}>{(item.login && item.login !== null 
                                ? <span>{item.login}</span> 
                                : <span>anonim</span>)}
                              </li>
                            ))) 
                          : null}
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
                posts.map((item, index) => <PostSmall  key={index} post={item} />)
              }
              </ul>
            </div>
        </div>  
      : null
    )
  )
}

export default UserProfile;


