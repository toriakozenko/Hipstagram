import { useDispatch } from "react-redux";
import { actionAuthLogout } from "../../store/authReducer";

function LogOut() {
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(actionAuthLogout())
  }
  return (
    <button onClick={handleLogOut}>Log out</button>
  )
}

export default LogOut;