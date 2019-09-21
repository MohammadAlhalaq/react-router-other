import React, {useState} from 'react';
export default () => {
  const [emailInput, setEmailInput] = useState(); 
  const [passInput, setPassInput] = useState(); 
  const sendUserData = () => {
    console.log(emailInput);
    console.log(passInput);
  }
  return <div className="signup-form">
  <form action="/signup" method="POST" >
    <input className="input" type="email" name="Email" placeholder="Email" onChange={(e) => setEmailInput(e.target.value)} />
    <input className="input" type="password" name="pass" placeholder="Password" onChange={(e) => setPassInput(e.target.value)} />

    <input className="button" type="button" name="button" value="Button" onClick={sendUserData} />

  </form>
</div>
}