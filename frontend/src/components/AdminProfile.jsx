import React, { useContext, useState, useEffect } from 'react';
import { LoginContextObj } from '../contexts/LoginContext';
import axios from 'axios';

function AdminProfile() {
  const { currentUser } = useContext(LoginContextObj);
  const [listOfUsers, setListOfUsers] = useState([]);
  const [listOfSellers, setListOfSellers] = useState([]);

  async function getUsersAndSellers() {
    let res1 = await axios.get("http://localhost:3000/user-api/users");
    setListOfUsers(res1.data.payload);
    let res2 = await axios.get("http://localhost:3000/seller-api/sellers");
    setListOfSellers(res2.data.payload);
  }

  useEffect(() => {
    getUsersAndSellers();
  }, []);

  return (
    <div>
      <h1 className='text-end text-info'>Admin Profile</h1>
      <p className='text-end text-success'>Welcome User: {currentUser?.username}</p>
  
      <h2 className='display-5 text-center text-info'>List of Users</h2>
      <ul className='text-center list-unstyled bg-secondary p-5'>
        {listOfUsers.map((user) => (
          <li key={user.id} className="text-warning fs-2">
            {user.username}
            <button className="btn btn-danger ms-4">Disable</button>
          </li>
        ))}
      </ul>
  
      <h2 className='display-5 text-center text-info'>List of Sellers</h2>
      <ul className='text-center list-unstyled bg-secondary p-5'>
        {listOfSellers.map((seller) => (
          <li key={seller.id} className="text-warning fs-2">
            {seller.username}
            <button className="btn btn-danger ms-4">Disable</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminProfile;
