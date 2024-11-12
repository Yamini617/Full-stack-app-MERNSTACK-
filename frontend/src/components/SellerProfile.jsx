import {Link, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContextObj } from '../contexts/LoginContext'

function SellerProfile() {
  const {currentUser}=useContext(LoginContextObj)
  return (
   <div>
 <h1 className='text-center'>Seller Profile</h1>
    <h1 className='text-end text-primary'>Welcome {currentUser?.username}</h1>
      <h1 className='text-end text-success' >Email: {currentUser?.email}</h1>
      <div>
      <ul className='nav justify-content-around py-4 display-5'>
      <li className='nav-item'>
       <Link className='nav-link text-secondary' to="add-product">
       Add Product
       </Link>
   </li>

   <li className='nav-item'>
       <Link className='nav-link text-secondary' to="products">
       Products
       </Link>
   </li>
    </ul>
    <Outlet />
  
</div>
</div>


  )
  
  
}

export default SellerProfile