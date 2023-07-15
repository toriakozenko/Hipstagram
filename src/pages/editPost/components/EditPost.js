import { useParams } from "react-router-dom";
import {  actionEditPost} from "../../../api"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { API_URL } from "../../../constants/Api_Graphql";
import noAvatarPhoto from '../../../assets/images/icons/HomePage/no-avatar.svg';
import './style.scss';


function EditPost() {
  const { postId } = useParams();
    const dispatch = useDispatch();
    const editPost = useSelector(state => console.log(state, 'state'));
    const { status, payload } = editPost || {};
   

    useEffect(()=>{
      dispatch(actionEditPost(postId))
  }, [postId, dispatch]);

  

    return (
      status === "PENDING" || !payload ? <CircularProgress />
      : 
    // (<div>
    //   {
    //     payload ?
    //     <div className="profile-container">
    //       {payload.avatar ? (<img className="avatar" src={`${API_URL}/${payload?.avatar?.url}`} alt="avatar" />) : (<img className="avatar" src={noAvatarPhoto} alt="no avatar" />)}
    //       <span>{payload.login}</span>

          
    //     </div>  
    //       : null
    //   }
    //  </div>)
    <div>lalala</div>
    )
}

export default EditPost;