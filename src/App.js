import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import ClockLoader from "react-spinners/ClockLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() =>   {
  setLoading(true)
  setTimeout(() =>{
    setLoading(false)
  }, 1000)
  }, [])
  return (
    <div className="App">
      {
        loading ?
        <ClockLoader
        color={"#3385ff"}
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        :
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
      }
      
    </div>
  );
}

export default App;
