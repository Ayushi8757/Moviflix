import React from 'react';
import icon1 from "./icon1.png";
import user from "./user.png";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user)

  const onhandlesignout=()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/");
}).catch((error) => {
  // An error happened.
  navigate("/error")
});
  }
  return (
    <div className='absolute top-0 z-10 w-screen  bg-gradient-to-b from-black  flex  flex-wrap justify-between'>
      <img  className='w-50 ' src={icon1}
      alt='logo'
      />
      { user && <div className='flex p-2'>
        <img  className="w-12 h-12 rounded-3xl" src={user?.photoURL}/>
        <button onClick={onhandlesignout}className='font-bold text-white'> Sign Out</button>
      </div>}
    </div>
  );
};

export default Header;