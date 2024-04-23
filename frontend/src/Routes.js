import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
// import SignIn from './Components/Signin';
// import Signup from './Components/Signup';
// import ConfirmCode from './Components/ConfirmEmail';
import LandingOchestrator from './Components/UserLandingPage/LandingOchestrator';
import UserLikesDashboard from './Components/UserLikesPage/UserLIkesDashboard';
import UserDashboard from './Components/Dashboard/UserDashboard';


export default createBrowserRouter([
    {
        path: "/",
        element: <LandingOchestrator />,
    },
    // {
    //     path: "/signin",
    //     element: <SignIn />
    // },
    // {
    //     path: "/signup",
    //     element: <Signup />
    // },
    // {
    //     path: "/confirmcode",
    //     element: <ConfirmCode />
    // },
    {
        path: "dashboard",
        element: <UserDashboard />
    },
    {
        path: "/userlikes",
        element: <UserLikesDashboard />
    }
]);