import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import styled from 'styled-components'
import DataContainer from "../src/components/Character"
 

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [swData, setSwData] = useState([])
 
    useEffect(()=>{
      axios
      .get("https://swapi.dev/api/people")
      .then(res => {
        setSwData(res.data)
        console.log(res.data);
      })
      .catch(err => {
        console.log(err)
      })
    },[])
const StyledHeader=styled.h1 `
  color: blue;
  transition: fill 0.25s;

`
  return (
    <div className="App">
      <StyledHeader className="Header">Star Wars Episode 4 "A New Hope" Characters
      </StyledHeader>
      {swData.map(item => (
        <DataContainer key={item.name} swData={item} swName={item} swBirth={item} />
      ))

      }
    </div>
  );
}

export default App;
