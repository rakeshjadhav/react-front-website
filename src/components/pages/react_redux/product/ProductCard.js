import React from 'react';
import { Typography, Card, CardContent, CardActions, Button } from '@material-ui/core';

// import Image from "material-ui-image";

export default function ProductCard ({
    product = null,
    onAddToCart = () => {}
}) {
    return (
        <Card>
            <CardContent>
                <img src="https://www.bigbasket.com/media/uploads/p/s/40205743_1-fresho-butternut-squash.jpg" />
                <Typography gutterBottom variant="h6" style={{ fontSize: '14px' }} component="p" color="primary">
                    {product.product_name}
                </Typography>
                <Typography style={{ fontSize: '14px' }} color="secondary" >
                    {product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    onClick={onAddToCart}
                >
          Add to Cart
                </Button>
                <Button size="small" color="secondary">
          Buy Now
                </Button>
            </CardActions>
        </Card>
    );
}
