import React, { useState, useEffect } from 'react'

function Login(props) {
  const [details, setDetails] = useState(null)

  async function fetchUserDetails(user) {
    const response = await fetch("/" + user);
    setDetails(await response.json());
  }

  useEffect(() => {
    fetchUserDetails(props.user)
  }, [props.user]);

  if(!details) {
    return "...loading"
  }

  return (
    <>
      <div>{details.username}</div>
      <span>{details.password}</span>
      <h6>jsdheuihiedbwdbiwdiwdbwiubdwbdwdwdwndwdibde</h6>
    </>
  )
}

export default Login
