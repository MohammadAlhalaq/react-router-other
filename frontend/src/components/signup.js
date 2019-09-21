import React, { useState } from 'react'
import './signup.css';
export default () => {
  const [nameInput, setNameInput] = useState(); 
  const [emailInput, setEmailInput] = useState(); 
  const [passInput, setPassInput] = useState(); 
  const [confPassInput, setConfPassInput] = useState(); 
  // const [nameInput, setNameInput] = useState(); 
  // const refname = React.createRef();
  const sendUserData = () => {
    console.log(nameInput);
    console.log(emailInput);

    console.log(passInput);

    console.log(confPassInput);

    
  }
  return <div className="signup-form">
      <form action="/signup" method="POST" >
        <input className="input" type="text" name="name" placeholder="name" onChange={(e) => setNameInput(e.target.value)} />
        <input className="input" type="email" name="Email" placeholder="Email" onChange={(e) => setEmailInput(e.target.value)} />
        <input className="input" type="password" name="pass" placeholder="Password" onChange={(e) => setPassInput(e.target.value)} />
        <input className="input" type="password" name="confPass" placeholder="Confirm password" onChange={(e) => setConfPassInput(e.target.value)} />
        
        <input className="button" type="button" name="button" value="Button" onClick={sendUserData} />

      </form>
    </div>
}