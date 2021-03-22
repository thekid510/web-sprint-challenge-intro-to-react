// Write your Character component here

import React from 'react';
import styled from "styled-components"
const StyledTitle = styled.div`
    color:red;
    font-size:30px;
    ` 
const DataContainer = (props) => {
    const { swData } = props;
    console.log(props)
  return ( 
      <div> 
        
             {swData && <h1 title= {swData.name} />}
                 {console.log(swData.name)}
        
                <StyledTitle className ='name'>
                    {swData.name}
                    
                 </StyledTitle>
                 {swData && <p title ={swData.birth_year} />}
                    {console.log(swData.birth_year)}
                    {`Birth Year: ${swData.birth_year}`}
      </div>
  )  
} 
export default DataContainer;