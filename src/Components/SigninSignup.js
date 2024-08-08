import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkvaliddata } from '../utills/Validate';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { useNavigate, useNavigation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utills/userSlice';


function SigninSignup() {
  const [isSignForm,setIsSignForm]=useState(true);
  const [errormessage,seterrormessage]=useState(null);
  const navigate=useNavigate();
  const dispatch=useDispatch
  const togglesigninform=()=>{
    setIsSignForm(!isSignForm);
  }
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
  const handleButtonClick=()=>{
    //validate the form data
    const message=checkvaliddata(email.current.value,password.current.value)
    console.log(message);
    seterrormessage(message);
    if(message)return;

    if(!isSignForm){
      //signup logic
      const auth = getAuth();
createUserWithEmailAndPassword(auth,
  email.current.value, 
   password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    const auth = getAuth();
updateProfile(user, {
  displayName: name.current.value, photoURL:"https://lh3.googleusercontent.com/a/ACg8ocK406hAMCgBNTTbQlfUV92IU_6M6_ZZb5hsFa8sCQW3JcxAhCN3=s360-c-no"
}).then(() => {
  const {uid,email,displayName,photoURL} = auth.currentUser;
    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
  // Profile updated!
  navigate("/browse");
}).catch((error) => {
  // An error occurred
 seterrormessage(error.message)
});

    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+"-"+errorMessage)
    // ..
  });

    }
    else{
      //sign in logic
      const auth = getAuth();
signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(error+"-"+errorMessage)
  });
    }
  }
  return (
    
    <div>
      <Header/>
      <div className='absolute  inset-0 z-0  bg-gradient-to-b from-black'>
        <img 
         className="w-full h-full object-cover  " src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-650-80.jpg.webp"
         alt='background'
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='absolute bg-gray-900 p-12 my-36 ml-[500px]
      mr-[500px]  text-white rounded-lg '>
        <h1 className='font-bold text-3xl py-4'>{isSignForm ? "Sign In":"Sign Up"} </h1>
        {!isSignForm && (
          <input 
          ref={name}   
          type='text '
          placeholder='Full Name'
          className='p-2 my-4 w-full bg-black outline outline-red-900'/>
        )}
        <input
        ref={email}    
        type='text '
        placeholder='Email Address'
        className='p-2 my-4 w-full bg-black outline outline-red-900'/>
        <input 
        ref={password}
        type='text '
        placeholder='Password'
        className='p-2 my-4 w-full bg-black outline outline-red-900'/>
        <p className='text-red-600'>{errormessage}</p>
        <button className='p-3 my-6 bg-red-600 w-full rounded-lg cursor-pointer' onClick={handleButtonClick}>{isSignForm ? "Sign In":"Sign Up"} </button>
        <p className='py-4 cursor-pointer' onClick={togglesigninform}> {isSignForm? "New to Movieflix ? Sign Up Now":"Already have an Account ? Sign In"}</p>
      </form>
    </div>
  )
}

export default SigninSignup;