import React from 'react'
import {useState} from 'react'
const StateEx =()=>
{
    const[data,setData]=useState(0);

    // const inc=()=>
    // {
    //     setData(data+1);
    // }
    // const dec=()=>
    // {
    //     setData(data-1);
    // }
    const[visible,seVisible]=useState(false);
    const toggle = ()=>
    {
        setVisible(!visible);
    }
    return(
        <>
{/* <button onClick={inc}>
    Increase
    </button>
    <p>{data}</p>
    <button onClick={dec}>
        Decrease
</button> */}
{visible ?<div>Visible</div>:' '}
<button onClick={toggle}>
    show
</button>
        </>
    )
    
}
export default StateEx