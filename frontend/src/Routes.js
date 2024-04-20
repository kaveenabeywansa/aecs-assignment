import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SignIn from './Components/Signin';
import Signup from './Components/Signup';
import ConfirmCode from './Components/ConfirmEmail';
import LandingOchestrator from './Components/UserLandingPage/LandingOchestrator';


export default createBrowserRouter([
    {
        path: "/",
        element: <LandingOchestrator />,
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