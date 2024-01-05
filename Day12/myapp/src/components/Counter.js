import { useState } from "react";
import React from "react";
const Counter=()=>
{
    const [Count,setCount]=useState(0);
    const Increment =()=>
    {
        setCount(Count+1);
    }
    const Decrement =()=>
    {
        setCount(Count-1);
    }
    return(
        <>
        <button onClick={Increment}>Increment</button>
        <p> count: {Count} </p>
        <button onClick={Decrement}>Decrement</button>
        </>
    )
}
export default Counter