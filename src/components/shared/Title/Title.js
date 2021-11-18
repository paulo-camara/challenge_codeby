import styled from "styled-components";

export const Title = styled.span`
    font-weight: ${props => props.isBold ? '700' : 'normal'};
    font-size: ${props => props.fontSize ? props.fontSize : '25px'};
    color: ${props => props.color ? props.color : '#00000'};
    displey: flex;
    margin: 5px;
`;