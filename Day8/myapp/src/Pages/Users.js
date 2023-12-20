import React, { useEffect, useState } from 'react';
import { getUser ,deleteUser,getUserId} from "../Service/api"
import '../Asserts/Css/core.css'
import { useNavigate } from 'react-router-dom';
const Users = () => {
    const navigate = useNavigate();
    const handleAdd=()=>{
        navigate('/add')
    }
    const [users, setUser] = useState([])

    const fetchData = async () => {
        try {
            const res = await getUser()
            console.log(res.data)
            setUser(res.data)
        }
        catch (e) {
            console.log(e)
        }
    }
    
    const handleEdit =(id)=>{
        navigate(`/edit/${id}`)
    }
    const handleDelete = async (id) => {
        try {
            const res = await deleteUser(id)
            if(res.status == 200){
                alert('User deleted successfully')
            }
            fetchData()
        }
        catch(e){
            console.log(e)
        }
    }
    console.log(Users)
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>
                            UserName
                        </th>
                        <th>
                            Password
                        </th>
                        <th>
                            Edit
                        </th>
                        <th>
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((users) => (
                        <tr key={users.id}>
                            <td>{users.username}</td>
                            <td>{users.password}</td>
                            <td>
                                <button className="edit-btn" onClick={()=> handleEdit(users.id)}>Edit</button>
                            </td>
                            <td>
                                <button className="del-btn" onClick={() => handleDelete(users.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            <button onClick={()=>handleAdd()} className='edit-btn'>add</button>
        </>
    )
}
export default Users