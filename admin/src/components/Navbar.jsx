// import React from 'react'
// import {assets} from '../assets/assets'

// const Navbar = ({setToken}) => {
//   return (
//     <div className='flex items-center py-2 px-[4%] justify-between'>
//         <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
//         <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
//     </div>
//   )
// }

// export default Navbar

import React from 'react';
import { assets } from '../assets/assets';
import './Navbar.css';  // Import the CSS file

const Navbar = ({ setToken }) => {
  return (
    <div className="navbar-container">
      <img className="navbar-logo" src={assets.logo} alt="Logo" />
      <button onClick={() => setToken('')} className="navbar-logout-btn">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
