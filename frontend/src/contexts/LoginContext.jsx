import { createContext,useState } from "react";
import axios from 'axios';
export const LoginContextObj=createContext()


function LoginContext({ children }) {
     const [currentUser,setCurrentUser]=useState(null);
     const [userLoginStatus,setUserLoginStatus]=useState(false);
     const [loginErr,setLoginErr]=useState(null);

async function login(userCredObj) {
  //make http post req to login
  let res=await axios.post('http://localhost:3000/api/login',userCredObj);
  const data =res.data;
  console.log("data is",data)
  if(data.message==='login success'){
    //save token in local storage/sesion storage
    sessionStorage.setItem('token',data.token)
    setCurrentUser(data.payload);
    setLoginErr(null);
    setUserLoginStatus(true);
    //navigate to profile
  }else{
    setCurrentUser(null)
    setUserLoginStatus(false)
    setLoginErr(data)
  }
}
//logout
     function logout() {
      //remove token from session/local storage
      sessionStorage.removeItem('token')
      //reset state
      setCurrentUser(null)
      setUserLoginStatus(false)
      setLoginErr(null)
     }

  return (
    <LoginContextObj.Provider
    value={{currentUser,setCurrentUser,userLoginStatus,
    setUserLoginStatus,loginErr,setLoginErr,login,logout}}
    >
     {children}
    </LoginContextObj.Provider>
  );
}

export default LoginContext