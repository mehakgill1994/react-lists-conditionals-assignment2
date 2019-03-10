import React from 'react';

const CharComponent = (props) => {

    const CharComponentStyle = {
        display: "inline-block",
        padding: "16px",
        textAlign: "center", 
        margin: "16px", 
        border: "1px solid black"
    }
    return <div className="CharComponent" style={CharComponentStyle}>
        <p onClick={props.click}>{props.alphabet}</p>
    </div>
}

export default CharComponent;