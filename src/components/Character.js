// Write your Character component here

import React from 'react';
import styled from "styled-components"
const StyledTitle = styled.div`
color:red;
` 
const DataContainer = (props) => {
    const { swData } = props;
    console.log(props)
  return ( 
      <div> 
          {swData && <img src ={swData.url} />}
            {console.log(swData.url)}
             {swData && <h1 title= {swData.name} />}
                 {console.log(swData.name)}
                 <StyledTitle className ='name'>
                    {swData.name}
        

                 </StyledTitle>
      </div>
  )  
} 
export default DataContainer;