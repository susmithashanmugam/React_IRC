import React from 'react'
function childprop (props){
    return(
        <>
        <h1> I'm {props.name}</h1>
        <p>I'm{props.email}</p>
        </>
    )
}
export default childprop