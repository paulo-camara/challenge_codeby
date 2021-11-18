import styled from 'styled-components';
import { Modal } from "../../shared/Modal/Modal";
import { Title } from '../../shared/Title/Title';

export const ProductDetail = ({ onCancel, isOpen, product }) => {
    return (
        <Modal isOpen={isOpen} title={"Detalhes do Produto"} onCancel={() => onCancel(false)}>
            <LineContainer>
                <Title isBold fontSize={"20px"}>Nome da loja: </Title>
                <DataLine>{product.additionalInfo.brandName}</DataLine>
            </LineContainer>

            <LineContainer>
                <Title isBold fontSize={"20px"}>Nome do produto: </Title>
                <DataLine>{product.name}</DataLine>
            </LineContainer>

            <LineContainer>
                <Title isBold fontSize={"20px"}>Quantidade: </Title>
                <DataLine>{product.quantity}</DataLine>
            </LineContainer>

            <LineContainer>
                <Title isBold fontSize={"20px"}>Taxa:</Title>
                <DataLine>{product.tax}</DataLine>
            </LineContainer>

            <LineContainer>
                <Title isBold fontSize={"20px"}>Peso:</Title>
                <DataLine>{product.skuName}</DataLine>
            </LineContainer>
        </Modal>
    )
};

const LineContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const DataLine = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;