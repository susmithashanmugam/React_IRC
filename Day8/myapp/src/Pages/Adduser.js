import '../Asserts/Css/core.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../Service/api'
import { useState } from 'react'
function Addusers() {
    const navigate =useNavigate();
    const [data, setData] = useState({
        username: '',
        password: ''
    })
    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           const res= await addUser(data)
           if(res.status==201){
            alert("User added")
            navigate('/')
           }
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' id='username' placeholder='username' onChange={handleChange} />
                <input type='password' id='password' placeholder='password' onChange={handleChange} />
                <button type='submit' className='submit-btn'>Add</button>
            </form>
        </>
    )
}
export default Addusers