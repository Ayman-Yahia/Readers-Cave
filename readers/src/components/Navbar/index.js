import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";


const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Readers Cave
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
				<NavLink to="/read" activeStyle>
                    Read
                </NavLink>
                <NavLink to="/write" activeStyle>
                    Write
                </NavLink>
				<NavLink to="/categories" activeStyle>
                    Categories
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    Contact us
                </NavLink>
				<NavLink to="/signin" activeStyle>
                    Sign In
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;