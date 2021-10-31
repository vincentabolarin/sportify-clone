import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Wrapper className="footer">
            <p className="built-by faint-text">
                <span>Built by </span>
                <a href="https://www.twitter.com/vincentabolarin"><span>Vincent Abolarin</span></a>
            </p>
            <p className="credits">
                <span>Credits: </span>
                <a href="https://www.football-data.org"><span>Football data API</span></a>
            </p>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    font-family: 'Poppins', sans-serif;
    margin-top: -80px;
    padding-top: 3rem;
    padding-bottom: 1.5rem;
    box-sizing: border-box;

    .built-by {
        text-align: center;
        margin-top: 0;
        margin-bottom: 1rem;
    }

    .credits {
        text-align: center;
        font-size: 80%;
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 1rem
    }
`
 
export default Footer;