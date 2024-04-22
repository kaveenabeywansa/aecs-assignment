import React, { useEffect } from 'react';
import LikeService from '../../Helpers/user-likes-service';
import LikeItem from './LikeItem';

function UserLikesDashboard() {
    const [likeInputStr, setLikeInput] = React.useState("");
    const [userLikesArr, setUserLikesArr] = React.useState([]);

    useEffect(() => {
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
            <h3>User Like Management</h3>
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
