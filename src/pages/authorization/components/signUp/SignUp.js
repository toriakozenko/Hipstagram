import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import { actionFullLogin, actionFullRegister } from '../../../../store/authReducer';
import { NavLink, useNavigate } from 'react-router-dom';
import hipstagramLogo from '../../../../assets/images/logo/Hipstagram-logo.png';
import './style.scss';




function SignUp() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const state = useSelector((state) => state.promise);
  const { status, payload } = state?.registration || {};

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

    if(!login || !password) {
      setButtonDisabled(true)
    }

    if(login && password) {
      dispatch(actionFullRegister(login, password));
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
        <div className='form-container'>
        <img src={hipstagramLogo} alt='hipstagramLogo'/>
        <p>Register to share photos and videos with your friends.</p>
        <form onSubmit={submit}>
          <input id="login" type="email" placeholder="Login" onChange={listenLoginInputChange} />
          <input id="password" type="password" placeholder="Password"  onChange={listenPasswordInputChange}/>
          <button type='submit' disabled={buttonDisabled}>Sig Up</button>
        </form>
        </div>

        <div className='login-container'>
          <span>Have an account? <NavLink to='/signin'>Sign In</NavLink></span>
        </div>
        
      </div>
  )
}

export default SignUp;