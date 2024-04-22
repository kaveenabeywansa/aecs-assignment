import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserDashboard(props) {
    const navigate = useNavigate();
    const username = localStorage.getItem('loggedUsername');
    return (
        <div className="dashboard-container">
            <h2>
                Welcome {username}
            </h2>

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
