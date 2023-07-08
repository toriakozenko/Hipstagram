import { useParams } from "react-router-dom";
import { actionOneUser } from "../../../api"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


function Profile() {
  const { userId } = useParams();
    const dispatch = useDispatch();
    const oneUser = useSelector(state => state.promise.oneUser);
    console.log('oneUser', oneUser);
    const state = useSelector(state => state);
    console.log(state);

    const { status, payload } = oneUser || {};

    useEffect(()=>{
      dispatch(actionOneUser(userId))
  }, [userId, dispatch]);

  return (
    <div>ProfilePage</div>
  )
}

export default Profile;