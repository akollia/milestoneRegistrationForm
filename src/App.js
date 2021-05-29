import React, { useState } from 'react';
import './App.css';
import Button from "./components/Button"

function App() {
  const [name, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  return (
    <div className="App">
            <h1>Fitness Plan</h1>

            

      {/*<Button name="Login" onClick={() => alert("Successfully logged in")}/>
      <Button name="Register" onClick={() => alert("Successfully registered")}/>
      <Button name="Contact" onClick={ () => alert("Successfully entered contact page")}/>*/}


<div id="registration-form">
  <form onSubmit={() => alert(`Successfully submitted as ${email}`)}>
  <div className="fullName-input">
      <label htmlFor="fullName">Full Name:  </label>
      <input type="name" id="fullName" value={name}  onChange={(e) => setfullName(e.target.value)}/>
      </div>

    <div className="email-input">
      <label htmlFor="email">Email:  </label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>

    <div className="password-input">
    <label htmlFor="password">Password:  </label>
    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    </div>

    <div className="date-input">
      <label htmlFor="date">Date of birth:  </label>
      <input type="date" id="date" value={date} min="1950-01-01" max="2003-12-31" onChange={(e) => setDate(e.target.value)}/>
    </div>

    <div className="weight-input">
      <label htmlFor="weight">Your weight in Kg:  </label>
      <input type="number" id="weight"  value={weight} onChange={(e) => setWeight(e.target.value)}/>
    </div> 
    <div className="height-input">
      <label htmlFor="height">Your height in cm:  </label>
      <input type="string" id="height"  value={height} onChange={(e) => setHeight(e.target.value)}/>
    </div> 
  
    <Button type="submit" name="Submit" onClick={ () => alert("Successfully submitted!")}/>
  
    
   
  </form>
</div>
      
    </div>
  );
}

export default App;
