import React from "react";
import UserPool from "../../UserPool";
import { CognitoUserAttribute, CognitoUser } from "amazon-cognito-identity-js";
import Swal from 'sweetalert2';
function SignUpForm() {
  const [state, setState] = React.useState({
    username: "",
    email: "",
    password: "",
    code: "",
  });
  const [isInitialSignup, setisInitialSignup] = React.useState(true);
  const [isUserVerified, setisUserVerified] = React.useState(false);

  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { username, email, password } = state;

    var dataEmail = {
      Name: 'email',
      Value: email,
    };
    var attributeEmail = new CognitoUserAttribute(dataEmail);
    UserPool.signUp(username, password, [attributeEmail], null, (err, data) => {
      if (err) {
        console.error(err);
      } else if (data) {
        console.log('Success', data);
        setisInitialSignup(false);
      }
    });
  };

  const handleOnUserConfirmSubmit = evt => {
    evt.preventDefault();

    const { username, code } = state;

    const cognitoUser = new CognitoUser({
      Username: username,
      Pool: UserPool
    });

    cognitoUser.confirmRegistration(code, true, function (err, result) {
      if (err) {
        if (err == 'CodeMismatchException: Invalid verification code provided, please try again.') {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid verification code provided, please try again!"
          });
        }
        console.error(err);
        return;
      } else if (result) {
        console.log('call result: ', result);
        setisUserVerified(true);
      }
    });
  };
  return (
    <div className="form-container sign-up-container">
      {
        isUserVerified ?
          <form >
            <h2>User has been Verified</h2>
            <img src={ require('../../assets/green-checkmark.webp') } />
          </form>
          : isInitialSignup ?
            <form onSubmit={handleOnSubmit}>
              <h1>Create Account</h1>
              <input
                type="text"
                name="username"
                value={state.username}
                onChange={handleChange}
                placeholder="Username"
              />
              <input
                type="email"
                name="email"
                value={state.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                value={state.password}
                onChange={handleChange}
                placeholder="Password"
              />
              <button>Sign Up</button>
            </form>
            :
            <form onSubmit={handleOnUserConfirmSubmit}>
              <h1>Confirm User</h1>
              <p>An email has been sent to your email address containing the verification code.</p>
              <input
                type="text"
                name="code"
                value={state.code}
                onChange={handleChange}
                placeholder="Code"
              />
              <button>Verify</button>
            </form>
      }


    </div>

  );
}

export default SignUpForm;
