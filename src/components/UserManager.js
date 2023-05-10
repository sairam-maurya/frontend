import React, { useEffect, useState } from 'react'



const UserManager = () => {
    const [UserList, setUserList] = useState([]);
    const fetchUserData = async() => {
        const res = await fetch('http://localhost:5000/user/getall')
        const data = await res.json();
        console.log(data);
        setUserList(data);
        

    };
    useEffect(() => {
        fetchUserData();
    }, [])
    
  return (
    <div>
        <div className='container'>
            <h1>Manager user Data</h1>
            <hr />
            <table className='table table-striped table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th colSpan={2} className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        UserList.map((user)=> (
                            <tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                
                                <td>
                                    <button className='btn btn-danger'>
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </td>
                                <td>
                                    <button className='btn btn-primary'>
                                        <i className="fas fa-pen"></i>
                                    </button>
                                </td>
                            </tr>
                        ) )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserManager;