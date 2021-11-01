import React from 'react';
import styled from 'styled-components';

import headerImage from '../assets/header-image.jpg'
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <Wrapper className="header">
            <img src={logo} className="logo" alt="logo" />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-image: url(${headerImage});
    position: relative;
    min-height: 300px;
    background-position: 50%;
    background-size: cover;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
 
export default Header;