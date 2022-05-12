import React, { useState } from 'react';
import './App.css';

function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    phone: "",
  });

  const inputEvent = (event) => {
    console.log((event.target.value));


    const { name, value } = event.target;

    setFullName((preValue) => {
      console.log(preValue);

      return {
        ...preValue,
        [name]: value,
      }

    })
  };


  const submitForm = (event) => {
    event.preventDefault();
    alert("Form Submitted");
    // console.log("Form");
  };



  return (
    <>
      <div className='App'>
        <form onSubmit={submitForm}>
          <div className='App2'>
            <h1>
              Hello {fullName.fname} {fullName.lname}
            </h1>
            <p>{fullName.email}</p>
            <p>{fullName.password}</p>
            <p>{fullName.phone}</p>

            <input
              type="text"
              placeholder='Enter Your First Name'
              name='fname'
              onChange={inputEvent}
              value={fullName.fname}
            />
            <br></br>
            <input
              type="text"
              placeholder='Enter Your Last Name'
              name='lname'
              onChange={inputEvent}
              value={fullName.lname}
            />
            <br></br>
            <input
              type="email"
              placeholder='Enter Your Email'
              name='email'
              onChange={inputEvent}
              value={fullName.email}
            />
            <br></br>
            <input
              type="password"
              placeholder='Enter Your Password'
              name='password'
              onChange={inputEvent}
              value={fullName.password}
            />
            <br></br>
            <input
              type="number"
              placeholder='Enter Your Phone Number'
              name='phone'
              required={true}
              onChange={inputEvent}
              value={fullName.phone}
            />
            <br></br>
            <button type='submit' onSubmit={submitForm}> Submit 😎</button>

          </div>
        </form>
      </div>
    </>
  );
}

export default App;
