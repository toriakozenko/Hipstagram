import { useParams } from "react-router-dom";
import {  actionUserPosts } from "../../../api"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { API_URL } from "../../../constants/Api_Graphql";
import noAvatarPhoto from '../../../assets/images/icons/HomePage/no-avatar.svg';
import './style.scss';


function UserPosts() {

  const { userId } = useParams();
  const dispatch = useDispatch();
  const userPosts = useSelector(state => state.promise.userPosts);
  const state = useSelector(state => state);
  console.log('state', state);
  const { status, payload } = userPosts || {};
  console.log('payload', payload)

  useEffect(() => {
    dispatch(actionUserPosts(userId))
}, [userId, dispatch]);

   

    return (
      <span>Work</span>
    )
    
}

export default UserPosts;

