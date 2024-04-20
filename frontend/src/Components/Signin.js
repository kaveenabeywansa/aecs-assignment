import React, { useState } from "react";
import UserPool from "../UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const SignIn = () => {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        const user = new CognitoUser({
            Username: username,
            Pool: UserPool
        });
        
        const authDetails = new AuthenticationDetails({
            Username: username,
            Password: password
        });

        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                console.log("onSuccess: ", data);
            },
            onFailure: (err) => {
                console.error("onFailure: ", err);
            },
            newPasswordRequired: (data) => {
                console.log("newPasswordRequired: ", data);
            }
        })
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
            <label htmlFor="username">Username</label>
                <input
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />

                <label htmlFor="email">Password</label>
                <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;