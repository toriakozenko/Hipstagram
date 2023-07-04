import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { actionFullLogin } from '../store/authReducer';



function SignUp() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const state = useSelector((state) => state.promise);
  const { status, payload } = state.login || {};
  console.log('state', state)
  
  const dispatch = useDispatch();


  function listenLoginInputChange(event){
    const value = event.target.value;
    setLogin(value);
  }

  function listenPasswordInputChange(event) {
    const value = event.target.value;
    setPassword(value);
  }


  // useEffect(() => {
  //   if (payload && payload.errors && payload.errors.length > 0) {
  //     console.log('error');
  //   }

  // }, [payload]);


  const navigate = useNavigate();
  

  function submit(e) {
    e.preventDefault();

    if(!login || !password ) {
      setButtonDisabled(true)
    }

    if(login && password) {
      dispatch(actionFullLogin(login, password));
    }
    
    if(status==='FULFILLED' && payload){
      navigate("/");
    }

     if(status==='FULFILLED' && payload === null){
      alert(`User with this username and password does not exist! Try again!`);
    }
  }

  return (
    <div className='signUp-container'>
    <form onSubmit={submit}>
      {/* <img src={hipstagramLogo} alt='hipstagramLogo'/> */}
      <input id="login" type="text" placeholder="Email" onChange={listenLoginInputChange}/>
      <input id="password" type="password" placeholder="Password" onChange={listenPasswordInputChange} />
      <button type='submit' disabled={buttonDisabled} >Sign In</button>
      {/* <button  >Logout</button> */}
    </form>

    <div className='login-container'>
      {/* <span>Don't have an account? <NavLink to='/signup'>Sign Up</NavLink></span> */}
    </div>
    
  </div>
  )
}

export default SignUp;