import React, { useState } from 'react'
import {Link} from "react-router-dom"

function Users() {
    const [users ,  setUser] = useState([{
        Name: "Deaw" , Email:"Deaw@gmail.com" , Age:21
    },{
        Name: "Pon" , Email:"Pon@gmail.com" , Age:21
    }])
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to='/create' className='btn btn-success'>Add</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        // If you  want to send data for reture on talbe  must use return
                        users.map((user)=>{
                           return <tr>
                                <td>{user.Name}</td>
                                <td>{user.Email}</td>
                                <td>{user.Age}</td>
                                <td>
                                    <Link to='/update' className='btn btn-success '>Update</Link>
                                    <button>Del</button>
                                </td>
                               
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users