import React from 'react';
import icon from "./icon.png";

function Header() {
  return (
    <div className='absolute top-0 left-0 z-10  shadow-none shadow-black '>
      <img  className='w-60 ' src={icon}
      alt='logo'
      />
    </div>
  );
};

export default Header;