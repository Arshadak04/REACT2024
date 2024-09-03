import { LOGO_URL } from "../utilities/common";
import { useState } from "react";
const Header = () => {

// let logout="Login"
const [logout,setlogout]=useState("Login")

    return (
      <div className="header">
        <div className="logo-container">
          <img
            src={LOGO_URL}
            alt="App Logo"
            className="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button onClick={()=>{
              logout==="Login"?setlogout("Logout"):setlogout("Login")
              
            }
                
            } className="login">{logout}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;