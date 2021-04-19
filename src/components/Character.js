// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
    color: red;
    font-size: 20px;

`
const StyledAttributes = styled.div`
    color: yellow;
    font-size 20px;
    padding:1.5%;
`
const DataContainer = (props) => {
    const { swData } = props;
    console.log (props)

    return(
        <div>
        <StyledCharacter className="character" >
            {swData.name}
        </StyledCharacter>
        <ol>
        <StyledAttributes className="attrib">
            {` Birth Year: ${swData.birth_year}`}
            {`Height: ${swData.height}cm & Mass: ${swData.mass}kg`}
            </StyledAttributes>
            </ol>
        </div>


)
}

export default DataContainer;