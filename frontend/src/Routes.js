import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SignIn from './Components/Signin';
import Signup from './Components/Signup';
import ConfirmCode from './Components/ConfirmEmail';


export default createBrowserRouter([
    {
        path: "/",
        element: <SignIn />,
    },
    {
        path: "/signin",
        element: <SignIn />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/confirmcode",
        element: <ConfirmCode />
    }
]);