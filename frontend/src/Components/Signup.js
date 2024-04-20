import React, { useState } from "react";
import UserPool from "../UserPool";
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        var dataEmail = {
            Name: 'email',
            Value: email,
        };
        var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
        UserPool.signUp(username, password, [attributeEmail], null, (err, data) => {
            if (err) {
                console.error(err);
            } else if (data) {
                console.log('Success', data);
            }
        });
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
            <label htmlFor="username">Username</label>
                <input
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />

                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <label htmlFor="email">Password</label>
                <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;