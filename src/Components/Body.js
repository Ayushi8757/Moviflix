import React from 'react';
import SigninSignup from './SigninSignup';
import Browse from './Browse';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

function Body() {
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<SigninSignup/>,
        },
        {
            path:"/browse",
            element:<Browse/>,
        },
    ]);
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;