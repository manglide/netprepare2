import React, {useState, useEffect } from 'react';
import logo from '../assets/img/logo.svg';
import '../assets/css/App.css';

import API from '../services'

import { connect } from 'react-redux'

function App() {
  const[centers, setCenters] = useState(null)
  const[error, setError] = useState(null)
  useEffect(() => {
    API.getLinks()
    .then((response) => {
      if(!response.ok) {
        throw new Error('Network Unreacheable')
      }
      return response.json();
    })
    .then((data) => {
      setCenters(data.data.slice(0, 1))
    })
    .then((error) => {
      setError(error)
    })
  }, []);

  if(!centers) {
    return "...loading"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" width="30" height="30" alt="logo" />
        <div>
        <ul>
        {
          centers.map((item, index) => (
            <li key={index}>
              <h4>{item.reg_fac_name.toLowerCase()}</h4> <br />
              <h6>{item.street_name.toLowerCase()}</h6>
            </li>
          ))
        }
        </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
