import './ProductList.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard.js';

const ProductList = () => {

    const products = useSelector(store => store.products);

   

    return (
        <React.Fragment>
            <div className="card-container">
                {
                    products.map(product =>
                        <ProductCard
                            key={product.idDrink}
                            title={product.strDrink}
                            thumb={product.strDrinkThumb}
                            price={product.price}>
                        </ProductCard >
                    )
                }
            </div>
        </React.Fragment>

    )
}

export default ProductList;