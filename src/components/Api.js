import React, { useState, useEffect } from 'react'

export default function Api(props) {
  const [feed, setFeed] = useState(null)

  async function GetFeeds() {
    const response = await fetch("/");
    setFeed( await response.json() )
  }

  useEffect(() => {
    GetFeeds();
  }, [])

  if(!feed) {
    return "...loading"
  }

  return (
    <div>
      <span>{feed.name}</span>
    </div>
  )
}
