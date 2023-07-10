import {  actionGetUserByLogin } from "../../../api"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { API_URL } from "../../../constants/Api_Graphql";
import noAvatarPhoto from '../../../assets/images/icons/HomePage/no-avatar.svg';
import './style.scss';


function UserSearch() {
  const [search, setSearch] = useState([]);
  
    const dispatch = useDispatch();

    const userByLogin = useSelector(state => state.promise.userByLogin);
    // const state = useSelector(state => state);
    const { status, payload } = userByLogin || {};

    return (
    (<div>
       <label> Enter user login
        <input value={search} onChange={e => {
          setSearch(e.target.value);
          dispatch(actionGetUserByLogin(e.target.value));
        }}/>
      </label>
      {
        payload &&
        payload.length ?
        payload.map(item => (
          <div key={item._id}>
            {item.avatar ? (<img className="avatar" src={`${API_URL}/${item?.avatar?.url}`} alt="avatar" />) : (<img className="avatar" src={noAvatarPhoto} alt="no avatar" />)}
            {item.login ? <span>{item.login}</span> : "anonimus"}
          </div>
        )) : "No recent searches."
          
      }
     </div>)
    )
}

export default UserSearch;