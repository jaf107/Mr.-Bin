import React from 'react'
import { Link } from 'react-router-dom';

const UserList = () => {
    const users = [
        {
            name: "Jafar Mahin",
            email: "jafarmahin107@gmail.com",
            phone: "01717743519",
            favorites: "1,2,3",
            date: '12/06/1999'
        }, {
            name: "Jitesh Sureka",
            email: "jiteshsureka@gmail.com",
            phone: "01717123123",
            favorites: "1,2,3",
            date: '12/06/1999'
        },
    ];
    return (
        <div>
            <div className='container'>
                <h2>All Users</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            {/* <th scope="col">Favorites</th> */}
                            <th scope="col">Created on</th>

                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td style={{
                                    textAlign: 'left'
                                }}>
                                    <Link to={'/user'}>
                                        {user.name}
                                    </Link> </td>
                                <td>{user.email} </td>
                                <td>{user.phone} </td>
                                {/* <td>{user.favorites} </td> */}

                                <td>{user.date} </td>
                                {/* <td><button className='btn btn-warning '> Edit </button> </td> */}
                                <td><button className='btn btn-danger '> Delete </button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList