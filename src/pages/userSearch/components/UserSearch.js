import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionGetUserByLogin } from "../../../api/users";
// import IconNoAvatar from "../../../assets/convertedIcons/IconNoAvatar";
import Face3Icon from '@mui/icons-material/Face3';

import { API_URL } from "../../../constants/Api_Graphql";
import './style.scss';

function UserSearch() {
  const [search, setSearch] = useState([]);
    const dispatch = useDispatch();
    const userByLogin = useSelector(state => state.promise.userByLogin);
    const { status, payload } = userByLogin || {};
    
    const navigate = useNavigate();
    function navigateToProfile(id) {
      navigate(`/users/${id}`);
    }
  return (
    (<div className="searchContainer">
      <h2>Search</h2>
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
          <div className="searchResult" key={item._id} onClick={() => navigateToProfile(item._id)}>
              {item.avatar && item.avatar.url !== null ? (<img src={`${API_URL}/${item?.avatar?.url}`} alt="avatar" />) : <Face3Icon />}
            {item.login ? <span>{item.login}</span> : "anonimus"}
          </div>
        )) : "No recent searches." 
      }
    </div>)
  )
}

export default UserSearch;