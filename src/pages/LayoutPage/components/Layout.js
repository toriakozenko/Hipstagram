import './style.scss';
import hipstagramLogo from '../../../assets/images/logo/Hipstagram logo for aside.png';
import createNewPostButton from '../../../assets/images/icons/HomePage/Aside/createNewPostButton.svg';
import directButton from '../../../assets/images/icons/HomePage/Aside/directButton.svg';
import homePageButton from '../../../assets/images/icons/HomePage/Aside/homePageButton.svg';
import settingsButton from '../../../assets/images/icons/HomePage/Aside/settingsButton.svg';
import searchButton from '../../../assets/images/icons/HomePage/Aside/searchButton.svg';
import exploreButton from '../../../assets/images/icons/HomePage/Aside/exploreButton.svg';
import { NavLink, useParams } from 'react-router-dom';




function Layout() {

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
      iconUrl: null,
      navLink: `profile`
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