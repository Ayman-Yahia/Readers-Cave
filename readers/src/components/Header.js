import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "../styling/header.module";
import styled from "styled-components";



const Header = () => {
	function Header() {
		// Import result is the URL of your image
		return <img className="logo" src='../images/logo.png' alt="Logo" />;
	  }
    return (
        <>
           <Nav>
            <NavLogo to="/">
			{Header()}
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
				<NavLink to="/novel/new" activeStyle>
                    Write
                </NavLink>
				<NavLink to="/categories" activeStyle>
                    Read
                </NavLink>
                <NavLink to="/chat" activeStyle>
                    Live Chat
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Header;
