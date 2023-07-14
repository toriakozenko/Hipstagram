import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import { actionFullLogin } from '../../../../store/authReducer';
import hipstagramLogo from '../../../../assets/images/logo/Hipstagram-logo.png';
import mainPagePicture from '../../../../assets/images/pic/login-page.JPG';
import './style.scss';



function SignIn() {
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

  const navigate = useNavigate();
  
  function submit(e) {
    e.preventDefault();

    if (!login || !password) {
      setButtonDisabled(true);
      return;
    }

    dispatch(actionFullLogin(login, password));
  }

  useEffect(() => {
    if (status === 'FULFILLED' && payload) {
      navigate('/');
    } else if (status === 'FULFILLED' && payload === null) {
      alert(`User with this username and password does not exist! Try again!`);
    }
  }, [status, payload, navigate]);


  return (
    <div className='homepage-wrapper'>

      <div className='pic-container'>
        <img src={mainPagePicture} alt="mainPagePicture" />
      </div>

      <div className='form-container'>
        <img src={hipstagramLogo} alt='hipstagramLogo'/>
        <form onSubmit={submit}>
          <input id="login" type="text" placeholder="Login" onChange={listenLoginInputChange} />
          <input id="password" type="password" placeholder="Password" onChange={listenPasswordInputChange}/>
          <button type='submit' disabled={buttonDisabled} >Sign in</button>
        </form>

        <div className='registration-container'>
          <span>Don't have an account? <NavLink to='/signup'>Sign Up</NavLink></span>
        </div>
        
      </div>

    </div>
  )
}

export default SignIn;