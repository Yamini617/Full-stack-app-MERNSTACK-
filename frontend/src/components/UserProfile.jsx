import { useContext ,useState} from 'react'
import { LoginContextObj } from '../contexts/LoginContext'
import {Link, Outlet } from 'react-router-dom'
import axios from 'axios'

function UserProfile() {
  const {currentUser}=useContext(LoginContextObj)
  const [protectedData,setProtectedData]=useState(null)
  async function getProtectedData() {
    //get token feom session storage
    const token=sessionStorage.getItem('token')
    if(!token){
      console.log("plz login to app");
    }else{
    let res=await axios.get('http://localhost:3000/user-api/protected',{
      headers:{'Authorization':`Bearer ${token}`}
    })
    if(res.data.status===401){
      setProtectedData({message:"plz login to continue...."})
    }else{
      setProtectedData(res.data)
    }
      

    }
  }
  
   
  return (
    <div>
    <div>
      <h2>{protectedData?.message}</h2>
      <button className='btn btn-danger d-block mx-auto my-5' onClick={getProtectedData}>Get Protecte info</button>
    <h1 className='text-center text-end'>User Profile</h1>
       <h1 className='text-end text-primary'>Welcome {currentUser?.username}</h1>
         <h1 className='text-end text-success' >Email: {currentUser?.email}</h1>
   
   </div>
   <ul className='nav justify-content-around py-4 display-5'>
   <li className='nav-item'>
       <Link className='nav-link text-secondary' to="products">
       Products
       </Link>
   </li>
   <li className='nav-item'>
       <Link className='nav-link text-secondary' to="cart">
       cart
       </Link>
   </li>
   </ul>
  
  {/* place holder */}
   <Outlet />
  



   </div>
  
  )
  
  
}

export default UserProfile