import React, { Component } from 'react';
import styled from 'styled-components';

import logo from '../../logo.svg';

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #e5e5e5;
}`;

const Title = styled.h1`
    color: black;
`;

const Logo = styled.div`
    border: 1px solid #e6e6e6;
    border-radius: 4px;
}
`;

export default class Splash extends Component {
    render() {
        return (
            <Wrapper>
                <Logo>
                    <img src={logo} className="App-logo" alt="logo" />
                </Logo>
                <Title>Rated Counsel</Title>
            </Wrapper>
        )
    }
}
