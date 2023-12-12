import { useState } from "react"

const TempComp =() =>
{
    const[data, setData]=useState({
        username:'',
        password:''
    })
    const handleChange=(e)=>
    {
        setData({...data,[e.target.id]:e.target.value })
        console.log (data)
    }
    const handleSubmit=(e)=>
    {
        e.preventDefault()
        console.log("data")
        console.log(data)
    }
    return(
        <>
        <form>
            <input type="text" placeholder="username" id="username" onChange={handleChange}/>
            <input type="Password" place holder="Password" id="password" onChange={handleChange}/>
           <input type="submit" value="Login" />
        </form>
        </>
    )
}
export default TempComp