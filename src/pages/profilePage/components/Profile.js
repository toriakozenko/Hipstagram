import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { API_URL } from "../../../constants/Api_Graphql";
import noAvatarPhoto from '../../../assets/images/icons/HomePage/no-avatar.svg';
import './style.scss';
import { actionOneUser } from "../../../api/users";


function Profile() {
  const { userId } = useParams();
    const dispatch = useDispatch();
    const oneUser = useSelector(state => state.promise.oneUser);
    const state = useSelector(state => state);
    console.log('state', state);
    const { status, payload } = oneUser || {};
    console.log('payload', payload)

    useEffect(() => {
      dispatch(actionOneUser(userId));
  }, [userId, dispatch]);
  

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
              <span>{payload.login !== '' ? payload.login : 'anonim' }</span>
              <button>Edit profile</button>
            </div>

            <div className="follow-container">
              <div className="followers-container">
              {payload.followers && payload.followers.length ? (payload.followers.map(item => <span>{item.login}</span>)) : <span>0 followers</span>}
              </div>
              
              <div className="following-container">
              {payload.following && payload.following.length ? (payload.following.map(item => <span>{item.login}</span>)) : <span>0 following</span>}
              </div>
            </div>
            </div>
          </div>

          
         </div>  
          : null
      )
    
    )
}

export default Profile;