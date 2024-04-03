import React from 'react'

function Card(props) {
    console.log(props.details.myObj);
    
    return (
        <div className="relative h-[400px] w-[300px] rounded-md mt-[20px]">
            <img
                src= {props.details.myObj.img}
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">{props.userName}</h1>
                <p className="mt-2 text-sm text-gray-300">
                    {props.details.myObj.bio}
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    View Profile →
                </button>
            </div>
        </div>

    )
}

export default Card
