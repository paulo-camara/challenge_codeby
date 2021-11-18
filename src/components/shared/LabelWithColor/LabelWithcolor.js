import styled from 'styled-components';

export const LabelWithColor = styled.span`
    background-color: ${props => props.backgroundColor};
    height: 10px;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: ${props => props.color};
    font-weight: bold;
    font-size: 20px;
    margin: 10px;
    border-radius: 50px;
`;