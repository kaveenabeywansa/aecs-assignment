import React, { useEffect }  from 'react';
import { useNavigate } from 'react-router-dom';
import UserPool from "../../Helpers/user-pool-config";
import { CognitoUser } from "amazon-cognito-identity-js";
import authGuard from '../../Helpers/auth-guard';

function UserDashboard(props) {
    const navigate = useNavigate();
    const username = localStorage.getItem('loggedUsername');

    useEffect(() => {
        if (!authGuard.isAuthenticated()) {
            navigate('/');
            return;
        }
    }, []);

    const handleSignOut = () => {
        const user = new CognitoUser({
            Username: username,
            Pool: UserPool
        });

        user.signOut();
        localStorage.removeItem('loggedUsername');
        navigate('/');
    }
    return (
        <div className="dashboard-container">
            <h2>
                Welcome {username}
            </h2>
            <button className='signout-btn' onClick={handleSignOut}>
                <img height={50} src={require('../../assets/logout.webp')} />
            </button>
            <hr className='hr-separtor' />

            <button onClick={() => navigate('/userlikes')}>
                <img height={300} src={require('../../assets/user-likes.png')} />
            </button>
            <button>
                <img height={300} src={require('../../assets/user-quotes.png')} />
            </button>
        </div>
    );
}

export default UserDashboard;
