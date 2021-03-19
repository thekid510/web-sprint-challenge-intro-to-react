import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import DataContainer from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [swData, setSwData] = useState([])
  
  useEffect(()=>{
    axios.get("https://swapi.dev/api/people/")
    .then(res =>{
      setSwData(res.data)
      console.log(res.data);
    })
    .catch(err => {
      console.log(err)
    })
  },[])



  return (
    <div className="App">
      <h1 className="Header"> Star Wars Characters</h1>
      { swData.map(item => (
    <DataContainer swData={item} swName={item} />
  ))
}   
    </div>
  );
}

export default App;
