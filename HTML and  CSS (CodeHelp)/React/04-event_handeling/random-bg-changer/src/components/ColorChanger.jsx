import React from "react";


const ColorChanger = (props) => {
    console.log(props);
    return (
        <button onClick={() => props.handelColorChange()} >Change Color</button>
    )
}

export default ColorChanger