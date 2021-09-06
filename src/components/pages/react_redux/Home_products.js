import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
// import { Link, NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import ProductsGrid from './product/ProductsGrid.controller';

import { fetchProducts } from './actions/products.actions';
// import { useDispatch } from "react-redux";

const Home_products = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-title" data-aos="zoom-out">
                    <h2>About</h2>
                    <p className="texttransform">Redux Thunk</p>
                    <div className="" style={{ paddingTop: '20px' }}>
                        <p style={{ textAlign: 'center', paddingBottom: '25px' }}>Appna Market</p>
                        <Box>
                            <ProductsGrid />
                        </Box>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home_products;
