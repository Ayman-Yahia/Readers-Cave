import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
} from "../styling/header.module";
import {Button} from "react-bootstrap"
import { useHistory } from "react-router-dom";

const Header = () => {
    let history = useHistory();
    const m=localStorage.getItem("user_id")
    const handleLog=()=>{
        localStorage.removeItem("authToken")
        localStorage.removeItem("user_id")
        history.push("/login")
    }
    return (
        <>
        <div>
        
           <Nav>
           
            <NavLogo to="/">
			<img className="logo" src='../images/logo.png' alt="Logo" />
            </NavLogo>
            <Bars />

            <NavMenu>
            <NavLink to="/" activeStyle>
                    Home
                </NavLink>

				<NavLink to="/write" activeStyle>
                    Write
                </NavLink>
				<NavLink to="/categories" activeStyle>
                    Read
                </NavLink>
                <NavLink to="/chat" activeStyle>
                    Live Chat
                </NavLink>
                
                {m?
                    <Button variant="danger" onClick={handleLog}>Logout</Button>:
                    <NavLink to="/login" activeStyle>
                    Login
                </NavLink>
                }
            </NavMenu> 
           </Nav> 
           </div>
        </>
    );
};
export default Header;
