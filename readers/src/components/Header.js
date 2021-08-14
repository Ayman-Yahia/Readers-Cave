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
				<NavLink to="/categories" activeStyle>
                    Categories
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
