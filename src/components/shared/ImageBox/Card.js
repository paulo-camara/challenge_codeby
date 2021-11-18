import React from 'react';
import styled from 'styled-components';

export const Card = ({ image, name, oldPrice, sellingPrice, onClick, sizeImage = '150px' }) => {
    console.log(image);
    return (
        <BoxImage onClick={onClick}>
            <ImageContainer size={sizeImage}>
                <Image src={image} />
            </ImageContainer>
            <RowContainer>
                <Row isBold>{name}</Row>
                <Row fontSize="14px">{`R$ ${oldPrice}`}</Row>
                <Row isBold fontSize={'18px'}>{`R$ ${sellingPrice}`}</Row>
            </RowContainer>
        </BoxImage>
    );
};

export const ImageContainer = styled.div`
    padding-right: 50px;
    min-height: ${props => props.size};
    min-width: ${props => props.size};
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const RowContainer = styled.div`
    display: flex; 
    justify-content: space-around; 
    width: 100%;
`;

const Row = styled.div`
    display: flex;
    padding-top: 20px;
    justify-content: start;
    font-weight: ${(props) => props.isBold ? '700' : 'none'};
    font-size: ${(props) => props.fontSize ? props.fontSize : '18px'};
    margin: 5px 0 5px 5px;
`;

const BoxImage = styled.div`
    display: flex;
    cursor: pointer;
    padding: 10px;
    margin: 10px;
    width: 100%;
    height: 140px;
    border-radius: 4px;
    border: 2px solid #f0f0f0;
    background-color: #FFFFFF;
    box-shadow: 5px 5px 12px #e1d6d6;

    @media (max-width: 600px) {
        width: 1000px;
        height: 200px;
    }
`;