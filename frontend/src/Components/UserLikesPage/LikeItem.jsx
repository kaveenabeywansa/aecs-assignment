import React, { useEffect } from 'react';
import LikeService from '../../Helpers/user-likes-service';

function LikeItem(props) {
    return (
        <li>
            <div>
                <label>{props.label}</label>
            </div>
        </li>
    );
}

export default LikeItem;
