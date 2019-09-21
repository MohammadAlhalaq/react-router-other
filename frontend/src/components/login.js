import React, {useState} from 'react';
import Cookies from 'universal-cookie';
const cookie = new Cookies();
export default () => {
  const [emailInput, setEmailInput] = useState(); 
  const [passInput, setPassInput] = useState(); 
  const sendUserData = () => {
    const user = {
      email: emailInput,
      password: passInput,
    }
    sendLogin(user);
  }
  const sendLogin = async (userData) => {
    const data = await fetch("http://localhost:3012/login", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const result = await data.json();
    cookie.set('user',result.data);
    console.log(result);
    
  }
  return <div className="signup-form">
  <form action="/signup" method="POST" >
    <input className="input" type="email" name="Email" placeholder="Email" onChange={(e) => setEmailInput(e.target.value)} />
    <input className="input" type="password" name="pass" placeholder="Password" onChange={(e) => setPassInput(e.target.value)} />
    <input className="button" type="button" name="button" value="Button" onClick={sendUserData} />

  </form>
</div>
};