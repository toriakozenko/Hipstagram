import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import createNewPostButton from '../../../assets/images/icons/HomePage/Aside/createNewPostButton.svg';
import directButton from '../../../assets/images/icons/HomePage/Aside/directButton.svg';
import exploreButton from '../../../assets/images/icons/HomePage/Aside/exploreButton.svg';
import homePageButton from '../../../assets/images/icons/HomePage/Aside/homePageButton.svg';
import searchButton from '../../../assets/images/icons/HomePage/Aside/searchButton.svg';
import settingsButton from '../../../assets/images/icons/HomePage/Aside/settingsButton.svg';
import noAvatar from '../../../assets/images/icons/HomePage/no-avatar.svg';
import hipstagramLogo from '../../../assets/images/logo/Hipstagram logo for aside.png';
import './style.scss';





function Layout() {
 
  const userId = useSelector(state => state?.auth?.payload?.sub?.id);
  
  const avatarUrl = noAvatar; // на певний час

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
      name: 'Direct',
      iconUrl: directButton,
      navLink: 'direct'
    },
    {
      name: 'Create post',
      iconUrl: createNewPostButton,
      navLink: 'newPost'
    },
    {
      name: 'Profile',
      iconUrl: avatarUrl,
      navLink: `users/${userId}`
    },
    {
      name: 'Settings',
      iconUrl: settingsButton,
      navLink: 'settings'
    }
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
              <li className='nav-item'>
                <img src={item.iconUrl} alt='Navigation'/>
                <span className='name'>{item.name}</span>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Layout;