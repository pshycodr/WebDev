import React from "react";

const Card = (props) => {

    return (
        <>
            <label htmlFor="Card">
                {props.title}
            </label>

            <input
                type="text"
                id="Card"
                onChange={(e) => props.setName(e.target.value)}
            />
            <p>name inside Card: {props.name}</p>
        </>
    )

}

export default Card