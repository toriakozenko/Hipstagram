import './style.scss';
import hipstagramLogo from '../../../../assets/images/logo/Hipstagram logo for aside.png';
import createNewPostButton from '../../../../assets/images/icons/HomePage/Aside/createNewPostButton.svg';
import directButton from '../../../../assets/images/icons/HomePage/Aside/directButton.svg';
import homePageButton from '../../../../assets/images/icons/HomePage/Aside/homePageButton.svg';
import settingsButton from '../../../../assets/images/icons/HomePage/Aside/settingsButton.svg';
import searchButton from '../../../../assets/images/icons/HomePage/Aside/searchButton.svg';
import exploreButton from '../../../../assets/images/icons/HomePage/Aside/exploreButton.svg';
import { Link } from 'react-router-dom';




function Aside() {
  const navList = [
    {
      name: 'Home',
      iconUrl: homePageButton,
      navLink: '/'
    },
    {
      name: 'Search',
      iconUrl: searchButton,
      navLink: "/userSearch"
    },
    {
      name: 'Explore',
      iconUrl: exploreButton,
      navLink: "/"
    },
    {
      name: 'Direct',
      iconUrl: directButton,
      navLink: 'direct'
    },
    {
      name: 'Create post',
      iconUrl: createNewPostButton,
      // navLink: 'direct'
    },
    {
      name: 'Profile',
      iconUrl: createNewPostButton,
      // navLink: '/users/usersId'
    },
    {
      name: 'Settings',
      iconUrl: settingsButton,
      // navLink: 'direct'
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
            <Link to={item.navLink}>
              <li className='nav-item' key={item.name}>
                <img src={item.iconUrl} alt='Navigation'/>
                <span className='name'>{item.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Aside;