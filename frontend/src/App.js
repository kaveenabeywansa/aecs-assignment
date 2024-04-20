import React from 'react';
import './App.css';
import Signup from "./Components/Signup";
import ConfirmEmail from "./Components/ConfirmEmail";
import Signin from "./Components/Signin";

function App() {
  return (
    <div>
      <Signup />
      <ConfirmEmail />
      <Signin />
    </div>
  );
}

export default App;
