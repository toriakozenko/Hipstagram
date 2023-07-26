import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import hipstagramLogo from '../../../../assets/images/logo/Hipstagram-logo.png';
import { actionFullLogin, actionFullRegister } from '../../../../store/authReducer';
import './style.scss';

function SignUp() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const state = useSelector((state) => state.promise);
  const { status, payload } = state?.registration || {};
  console.log('payload', payload)

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
    dispatch(actionFullRegister(login, password));
  }

  useEffect(() => {
    if (status === 'FULFILLED' && payload && payload?._id && payload?.login) {
      alert(`User successfully registered!`);
      dispatch(actionFullLogin(payload));
      navigate("/");
    } else if (status === 'FULFILLED' && !payload) {
      alert(`This username already exists!`);
    }
  }, [status, payload, dispatch, navigate]);

  
  return (
    <div className='signUp-container'>
      <div className='form-container'>
      <img src={hipstagramLogo} alt='hipstagramLogo'/>
      <p>Register to share photos and videos with your friends.</p>
      <form onSubmit={submit}>
        <input id="login" type="text" placeholder="Login" onChange={listenLoginInputChange} />
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