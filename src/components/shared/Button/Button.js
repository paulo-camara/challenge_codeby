import React from 'react';
import styled from 'styled-components';

export const Button = ({ title, onClick, color, width }) => {
    return <ButtonContainer>
        <ButtonStyled onClick={onClick} width={width} color={color}>
            {title}
        </ButtonStyled>
    </ButtonContainer>
};

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const ButtonStyled = styled.button`
    background-color: ${props => props.color ? props.color : "#3b74f2"};
    min-width: 70px;
    width: ${props => props.width};
    height: 35px;
    color: #FFFFFF;
    border-radius: 7px;
    outline: 0;
    border: 0;
    cursor: pointer;
    font-weight: 700;
`;