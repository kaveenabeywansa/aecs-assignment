import React, { useState } from "react";
import UserPool from "../Helpers/user-pool-config";
import { CognitoUser } from "amazon-cognito-identity-js";

const ConfirmCode = () => {
    const [confirmCode, setConfirmCode] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        const cognitoUser = new CognitoUser({
            Username: "batman", // TODO: use props
            Pool: UserPool
        });

        cognitoUser.confirmRegistration(confirmCode, true, function (err, result) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            } else if (result) {
                console.log('call result: ', result);
            }
        });
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
            <label>Verificatin Code</label>
                <input
                    value={confirmCode}
                    onChange={(event) => setConfirmCode(event.target.value)}
                />

                <button type="submit">Confirm</button>
            </form>
        </div>
    );
};

export default ConfirmCode;