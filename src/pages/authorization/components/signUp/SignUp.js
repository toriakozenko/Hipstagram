import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import hipstagramLogo from '../../../../assets/images/logo/Hipstagram-logo.png';
import { actionFullRegister } from '../../../../store/authReducer';
import './style.scss';

function SignUp() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function listenLoginInputChange(event){
    const value = event.target.value;
    setLogin(value);
  }

  function listenPasswordInputChange(event) {
    const value = event.target.value;
    setPassword(value);
  }
  

  async function submit(e) {
    e.preventDefault();

    if (!login || !password) {
      setButtonDisabled(true);
      return;
    }
    const response =  await dispatch(actionFullRegister(login, password));
    if ( response) {
      alert(`User successfully registered!`);
      navigate("/");
    } else {
      alert(`This username already exists!`);
    }
  }
  
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