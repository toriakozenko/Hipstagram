import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import { actionFullLogin, actionFullRegister } from '../store/authReducer';
import { useNavigate } from 'react-router-dom';



function SignUp() {
  const [nick, setNick] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const state = useSelector((state) => state.promise);
  const { status, payload } = state?.registration || {};

  const dispatch = useDispatch();


  function listenNickInputChange(event) {
    const value = event.target.value;
    setNick(value);
  }
  
  function listenLoginInputChange(event){
    const value = event.target.value;
    setLogin(value);
  }

  function listenPasswordInputChange(event) {
    const value = event.target.value;
    setPassword(value);
  }


  // useEffect(() => {
  //   if (status === 'FULFILLED') {
  //     alert(`User successfully registered!`);
  //     dispatch(actionFullLogin(payload));
  //     navigate("/");
  //   }

  //   if (payload && payload.errors && payload.errors.length > 0) {
  //     console.log('error')
  //   }

  // }, [payload]);


  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();

    if(!login || !password || !nick) {
      setButtonDisabled(true)
    }

    if(login && password && nick) {
      dispatch(actionFullRegister(login, password, nick));
    }

    if(status==='FULFILLED' && payload){
      alert(`User successfully registered!`);
      dispatch(actionFullLogin(payload));
      navigate("/");
    }

     if(status==='FULFILLED' && !payload){
      alert(`This username already exists!`);
    }
  }

  return (
    <div className='signUp-container'>
    <form onSubmit={submit}>
      {/* <img src={hipstagramLogo} alt='hipstagramLogo'/> */}
      <p>Register to share photos and videos with your friends.</p>
      <input id="nick" type="text" placeholder="NickName" onChange={listenNickInputChange} />
      <input id="login" type="text" placeholder="Email" onChange={listenLoginInputChange}/>
      <input id="password" type="password" placeholder="Password" onChange={listenPasswordInputChange} />
      <button type='submit' disabled={buttonDisabled} >Sign up</button>
    </form>

    <div className='login-container'>
      {/* <span>Have an account? <NavLink to='/'>Sign In</NavLink></span> */}
    </div>
    
  </div>
  )
}

export default SignUp;