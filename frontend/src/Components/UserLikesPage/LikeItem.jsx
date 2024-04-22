import React, { useEffect } from 'react';

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
