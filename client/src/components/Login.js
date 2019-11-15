import React, { useState } from "react";
import axios from 'axios'

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [error, setError] = useState()
  const [data, setData] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post('http://localhost:5000/api/login', data)
      .then((res) => {
        console.log(res)
        localStorage.setItem("token", res.data.payload);
        props.history.push('/bubbles')
      })
      .catch((err) => {
        setError(err.response.data.message)
      })
  }

  return (
    <div className='sign-in'>
      <h2> Sign In </h2>
      <form onSubmit={handleSubmit}>
        {error && <div className='error'>{error}</div>}
        <input type='username' name='username' placeholder='username' value={data.username} onChange={handleChange} /> <br />
        <input type='password' name='password' placeholder='password' value={data.password} onChange={handleChange} /><br />

        <button type='submit'> Sign In </button>
      </form>
    </div>
  );
};

export default Login;
