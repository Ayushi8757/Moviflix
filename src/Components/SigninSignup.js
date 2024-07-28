import React, { useState } from 'react'
import Header from './Header'

function SigninSignup() {
  const [isSignForm,setIsSignForm]=useState(true);
  const togglesigninform=()=>{
    setIsSignForm(!isSignForm);
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
      <form className='absolute bg-gray-900 p-12 my-36 ml-[500px]
      mr-[500px]  text-white rounded-lg '>
        <h1 className='font-bold text-3xl py-4'>{isSignForm ? "Sign In":"Sign Up"} </h1>
        {!isSignForm && (
          <input    
          type='text '
          placeholder='Full Name'
          className='p-2 my-4 w-full bg-black outline outline-red-900'/>
        )}
        <input    
        type='text '
        placeholder='Email Address'
        className='p-2 my-4 w-full bg-black outline outline-red-900'/>
        <input 
        type='text '
        placeholder='Password'
        className='p-2 my-4 w-full bg-black outline outline-red-900'/>
        <button className='p-3 my-6 bg-red-600 w-full rounded-lg cursor-pointer'>{isSignForm ? "Sign In":"Sign Up"} </button>
        <p className='py-4 cursor-pointer' onClick={togglesigninform}> {isSignForm? "New to Movieflix ? Sign Up Now":"Already have an Account ? Sign In"}</p>
      </form>
    </div>
  )
}

export default SigninSignup;