import React, { useState, useEffect } from "react";

export default function Centers(props) {
  const [center, setCenter] = useState(null);

  async function fetchUserData() {
    const response = await fetch("/");
    setCenter(await response.json());
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  if (!center) {
    return "loading...";
  }

  return (
    <details>
      <h2>{center.reg_fac_name}</h2>
      <h4>{center.street_name}</h4>
    </details>
  );
}
