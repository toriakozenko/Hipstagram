import './style.scss';
import hipstagramLogo from '../../../../assets/images/logo/Hipstagram logo for aside.png';
import createNewPostButton from '../../../../assets/images/icons/HomePage/Aside/createNewPostButton.svg';
import directButton from '../../../../assets/images/icons/HomePage/Aside/directButton.svg';
import homePageButton from '../../../../assets/images/icons/HomePage/Aside/homePageButton.svg';
import settingsButton from '../../../../assets/images/icons/HomePage/Aside/settingsButton.svg';




function Aside() {
  const navList = [
    {
      name: 'Home',
      iconUrl: homePageButton,
    },
    {
      name: 'Direct',
      iconUrl: directButton,
    },
    {
      name: 'Create post',
      iconUrl: createNewPostButton,
    },
    {
      name: 'Profile',
      iconUrl: createNewPostButton,
    },
    {
      name: 'Settings',
      iconUrl: createNewPostButton,
    }
  ];

  
  return (
    // <div className='aside-wrapper'>

    //   <div className='logo-container'>
    //     <img src={hipstagramLogo} alt="" />
    //   </div>

    //   <div className='sidebar-wrapper'>
    //   <ul className='sidebar-menu'>
    //     <li className='sidebar'>
    //       <img src={homePageButton} alt="home logo" />
    //       <p>Home</p>
    //     </li>
    //     <li className='sidebar'>
    //       <img src={directButton} alt="messages logo" />
    //       <p>Messages</p>
    //     </li>
    //     <li className='sidebar'>
    //       <img src={createNewPostButton} alt="create post logo" />
    //       <p>Create</p>
    //     </li>
    //     <li className='sidebar'>
    //       <img src="" alt="profile" />
    //       <p>Profile</p>
    //     </li>
        
    //   </ul>

    //   <div className='settings'>
      
    //       <img src={settingsButton} alt="settings logo" />
    //       <p>Settings</p>
          
        
    //   </div>

    //   </div>
      
    // </div>

    <div className="sidebar-container">
      <div className='logo'>
        <img src={hipstagramLogo} alt='Hipstagram'/>
      </div>

      <div className='sidebar'> 
        <ul className='navigation'>
          {navList.map((item) => (
            <li className='nav-item' key={item.name}>
              <img src={item.iconUrl} alt='Navigation'/>
              <span className='name'>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Aside