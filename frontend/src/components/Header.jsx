import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContextObj } from "../contexts/LoginContext";

function Header() {
  const { userLoginStatus, logout } = useContext(LoginContextObj);
  
  return (
    <ul className='nav justify-content-end bg-light py-4'>
      <li className='nav-item'>
        <Link className='nav-link' to="/">
          Home
        </Link>
      </li>
      
      {userLoginStatus === false && (
        <li className='nav-item'>
          <Link className='nav-link' to="register">
            Register
          </Link>
        </li>
      )}
  
      {userLoginStatus === false ? (
        <li className='nav-item'>
          <Link className='nav-link' to="login">
            Login
          </Link>
        </li>
      ) : (
        <li className='nav-item'>
          <Link className='nav-link' to="login" onClick={logout}>
            Logout
          </Link>
        </li>
      )}
    </ul>
  );
}

export default Header;