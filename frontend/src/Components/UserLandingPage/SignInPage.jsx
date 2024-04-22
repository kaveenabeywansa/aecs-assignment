import React from "react";
import { useNavigate } from 'react-router-dom';
import UserPool from "../../UserPool";
import { CognitoUser, AuthenticationDetails,  } from "amazon-cognito-identity-js";
import Swal from 'sweetalert2';

function SignInForm() {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    username: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { username, password } = state;

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
        localStorage.setItem('loggedUsername', username);
        navigate('/dashboard');
      },
      onFailure: (err) => {
        if (err == 'NotAuthorizedException: Incorrect username or password.') {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Incorrect username or password!"
          });
        } else {
          console.error("onFailure: ", err);
        }
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired: ", data);
      }
    })
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={state.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
