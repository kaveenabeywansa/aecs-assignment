import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LikeService from '../../Helpers/user-likes-service';
import LikeItem from './LikeItem';
import authGuard from '../../Helpers/auth-guard';

function UserLikesDashboard() {
    const navigate = useNavigate();

    const [likeInputStr, setLikeInput] = React.useState("");
    const [userLikesArr, setUserLikesArr] = React.useState([]);

    useEffect(() => {
        if (!authGuard.isAuthenticated()) {
            navigate('/');
            return;
        }
        getUserLikes();
    }, []);

    const getUserLikes = async () => {
        let results = await LikeService.getUserLikes(localStorage.getItem('loggedUsername'));
        if (results && results.likes) {
            console.log(results);
            setUserLikesArr(results.likes);
        }
    };

    const handleOnSubmit = async evt => {
        evt.preventDefault();
        if (likeInputStr.length > 0) {
            let results = await LikeService.addNewLike(localStorage.getItem('loggedUsername'), likeInputStr);
            if (results.success) {
                getUserLikes();
                setLikeInput('');
            }
        }
    };

    return (
        <div className="user-likes-container">
            <button className='transparent-btn' onClick={() => navigate('/dashboard')}>
                <img height={50} src={require('../../assets/home.png')} />
            </button>
            <h2>User Like Management</h2>
            <form onSubmit={handleOnSubmit}>
                <div className="add-likes-div">
                    <input
                        className="add-likes-div"
                        type="text"
                        placeholder="Enter a Like"
                        value={likeInputStr}
                        onChange={(event) => setLikeInput(event.target.value)}
                    />

                    <button>Add</button>
                </div>
            </form>

            <hr className="hr-separtor" />
            <ol>
                {
                    userLikesArr.map(
                        (element, index) => <LikeItem label={element} key={index} />
                    )
                }
            </ol>
        </div>
    );
}

export default UserLikesDashboard;
