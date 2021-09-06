import React from 'react';
import { GridList } from '@material-ui/core';

import ProductCard from './ProductCard.controller';

const renderGridTiles = (products = []) => {
    return products.map((product) => (
        <div cols={1} key={product.product_id}>
            <ProductCard product={product} />
        </div>
    ));
};

export default function ProductsGrid ({ products = [] }) {
    // console.log(products);
    return products.length > 0
        ? (
            <GridList cellHeight="auto" cols={3}>
                {renderGridTiles(products)}
            </GridList>
        )
        : null;
}
