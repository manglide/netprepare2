import React, { useState, useEffect } from 'react'

export default function Rss(props) {
  const [rss, setRss] = useState(null)

  async function fetchRss() {
    const response = await fetch("/");
    setRss(await response.json());
  }

  useEffect(() => {
    fetchRss();
  }, []);

  if(!rss) {
    return "...loading"
  }

  return(
    <div>
    <span>{rss.url}</span>
    </div>
  )
}
