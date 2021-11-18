import React, { useEffect, useState } from 'react';
import { GetApiRoutes } from '../../scripts/ApiRoutes';
import { Card } from '../shared/ImageBox/Card';
import { Request } from '../../scripts/Request';
import { Title } from '../shared/Title/Title';
import { Button } from '../shared/Button/Button';
import { LabelWithColor } from '../shared/LabelWithColor/LabelWithcolor';
import { getRandomInt } from '../../scripts/helper';
import { ProductDetail } from './ProductDetail/ProductDetail';
import toastr from 'toastr';

export const Home = () => {
    const [products, setProducts] = useState([]);
    const [selectProduct, setSelectProduct] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [total, setTotal] = useState(0);

    useEffect(() => _products(), []);

    const _products = () => {
        /** Foi feito um random para estar sendo possivel gerar o valor 
         * total acima e abaixo de 10 reais */
        const isMoreThanTen = getRandomInt(2);

        Request(
            GetApiRoutes(isMoreThanTen === 1 ? 'MoreThanTen' : 'LessThanTen'),
            {},
            data => _productsSuccess(data),
            err => err,
            'get'
        );
    };

    const _productsSuccess = (products) => {
        setTotal(products.totalizers[0].value);
        setProducts(products.items)
    };

    const _finishShop = () => toastr.success("Compra finalizada com sucesso");

    const _convertValue = (value) => {
        const price = (value / 100).toString();
        return price.replace('.', ',');
    };

    return (
        <div className="home-page">
            <div className="header">
                <Title isBold>Meu carrinho</Title>
            </div>
            <div className="content-body-page">
                {products.map((product) => (
                    <Card
                        sellingPrice={_convertValue(product.sellingPrice)}
                        oldPrice={_convertValue(product.price)}
                        name={product.name.toUpperCase()}
                        image={product.imageUrl}
                        onClick={() => {
                            setSelectProduct(product);
                            setIsOpenModal(true);
                        }}
                    />
                ))}
            </div>
            <div className="footer">
                <div className="description-total">
                    <Title isBold fontSize={"20px"}>Total</Title>
                    <Title isBold fontSize={"20px"}>{`R$ ${_convertValue(total)}`}</Title>
                </div>
                {total / 100 > 10 && <div className="freight-free">
                    <LabelWithColor color={"#457c00"} backgroundColor={"#c7ffa6"}>
                        Parabéns, sua compra tem frete grátis!
                    </LabelWithColor>
                </div>}
                <div className="finish-shop">
                    <Button width={"300px"} title={"Finalizar compra"} onClick={_finishShop} />
                </div>
            </div>
            {selectProduct && <ProductDetail
                isOpen={isOpenModal}
                onCancel={() => setIsOpenModal(false)}
                product={selectProduct} />}
        </div >
    );
};
