import React, { Component, useState } from 'react'


export default function Login (signIn, error) {
const [details, setDetails] = useState({email:"", password:""});
const submitHandler = (e) => {
e.preventDefault();
signIn(details)
}
;
    return (
  <form>
    <div onSubmit={submitHandler}>
      <h2>Login</h2>
      <div className='form-group'>
        <label>Email</label>
        <input type="email" name="email" id="email" 
        onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input type="password" name="password" id="password" 
        onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
      </div>
      <input type="submit" value="login"/>
    </div>
  </form>


  )
}


