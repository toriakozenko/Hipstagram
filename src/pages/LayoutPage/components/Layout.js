import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import createNewPostButton from '../../../assets/images/icons/HomePage/Aside/createNewPostButton.svg';
import exploreButton from '../../../assets/images/icons/HomePage/Aside/exploreButton.svg';
import homePageButton from '../../../assets/images/icons/HomePage/Aside/homePageButton.svg';
import searchButton from '../../../assets/images/icons/HomePage/Aside/searchButton.svg';
import settingsButton from '../../../assets/images/icons/HomePage/Aside/settingsButton.svg';
import logoutButton from '../../../assets/images/icons/HomePage/logout.png';
import noAvatar from '../../../assets/images/icons/HomePage/no-avatar.svg';
import hipstagramLogo from '../../../assets/images/logo/Hipstagram logo for aside.png';
import { API_URL } from '../../../constants/Api_Graphql';
import { actionAuthLogout } from '../../../store/authReducer';
import './style.scss';

function Layout() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeItem, setActiveItem] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();

  const userId = useSelector(state => state?.auth?.payload?.sub?.id);
  const userProfile = useSelector(state => state?.promise?.userProfile);
  const avatarUrl = isLoading && userProfile?.payload?.avatar?.url ? `${API_URL}/${userProfile?.payload?.avatar?.url}` : noAvatar;
  
  function handleLogOut() {
    dispatch(actionAuthLogout())
  }

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);


  const navList = [
    {
      name: 'Home',
      iconUrl: homePageButton,
      navLink: '/'
    },
    {
      name: 'Search',
      iconUrl: searchButton,
      navLink: "/search"
    },
    {
      name: 'Explore',
      iconUrl: exploreButton,
      navLink: "/explore"
    },
    {
      name: 'Create post',
      iconUrl: createNewPostButton,
      navLink: '/newPost'
    },
    {
      name: 'Profile',
      iconUrl: avatarUrl,
      navLink: `/profile/${userId}`,
      className: 'profile-icon'
    },
    {
      name: 'Settings',
      iconUrl: settingsButton,
      navLink: '/settings'
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
              <li className={`nav-item ${activeItem === item.navLink ? 'active' : ''} ${item.className || ''}`}>
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