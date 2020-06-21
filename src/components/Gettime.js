import React, {useState, useEffect } from 'react'

export default function Gettime(props) {
  const [time, setTime] = useState(null);

  async function fetchTime() {
    const response = await fetch("/");
    setTime( await response.json());
  }

  useEffect(() => {
    fetchTime();
  }, [])

  if(!time) {
    return "...loading"
  }

  return(
    <div>
    <h2>{time.day}</h2>
    <h3>{time.month}</h3>
    <h4>{time.year}</h4>
    </div>
  )
}
