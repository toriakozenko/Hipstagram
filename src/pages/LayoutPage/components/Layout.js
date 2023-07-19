import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import createNewPostButton from '../../../assets/images/icons/HomePage/Aside/createNewPostButton.svg';
import logoutButton from '../../../assets/images/icons/HomePage/logout.png';
import exploreButton from '../../../assets/images/icons/HomePage/Aside/exploreButton.svg';
import homePageButton from '../../../assets/images/icons/HomePage/Aside/homePageButton.svg';
import searchButton from '../../../assets/images/icons/HomePage/Aside/searchButton.svg';
import settingsButton from '../../../assets/images/icons/HomePage/Aside/settingsButton.svg';
import noAvatar from '../../../assets/images/icons/HomePage/no-avatar.svg';
import hipstagramLogo from '../../../assets/images/logo/Hipstagram logo for aside.png';
import { API_URL } from '../../../constants/Api_Graphql';
import './style.scss';
import LogOut from '../LogOut';
import { actionAuthLogout } from '../../../store/authReducer';

function Layout() {

  const userId = useSelector(state => state?.auth?.payload?.sub?.id);
  const userProfile = useSelector(state => state?.promise?.userProfile);
  const avatarUrl = userProfile?.payload?.avatar?.url ? `${API_URL}/${userProfile.payload.avatar.url}` : noAvatar;

  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(actionAuthLogout())
  }

  const navList = [
    {
      name: 'Home',
      iconUrl: homePageButton,
      navLink: '/'
    },
    {
      name: 'Search',
      iconUrl: searchButton,
      navLink: "search"
    },
    {
      name: 'Explore',
      iconUrl: exploreButton,
      navLink: "explore"
    },
    {
      name: 'Create post',
      iconUrl: createNewPostButton,
      navLink: 'newPost'
    },
    {
      name: 'Profile',
      iconUrl: avatarUrl,
      navLink: `profile/${userId}`,
      className: 'profile-icon'
    },
    {
      name: 'Settings',
      iconUrl: settingsButton,
      navLink: 'settings'
    },
  ];
    
  return (
      <div className="sidebar-container">
      <div className='logo'>
        <img src={hipstagramLogo} alt='Hipstagram'/>
      </div>

      <div className='sidebar'> 
        <ul className='navigation'>
          {navList.map((item) => (
            <NavLink to={item.navLink } key={item.name}>
              <li className={`nav-item ${item.className || ''}`}>
                <img src={item.iconUrl} alt='Navigation'/>
                <span className='name'>{item.name}</span>
              </li>
            </NavLink>
          ))}
           <div className='nav-item' onClick={handleLogOut}>
            <img src={logoutButton} alt="Logout" />
            <span>Logout</span>
          </div>
        </ul>
       
      </div>
    </div>
  )
}

export default Layout;