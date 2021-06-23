/* eslint-disable no-unused-vars */
import React from 'react';

import { Grid } from '@material-ui/core';

import Product from '../Product';

import useStyles from './styles';

const products = [
	{
		id: 1,
		name: 'Shoes',
		description: 'Running shoes',
		price: '5TL',
		image:
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e125b578-4173-401a-ab13-f066979c8848/air-force-1-gen%C3%A7-ayakkab%C4%B1s%C4%B1-1hqfHl.png',
	},
	{
		id: 2,
		name: 'Macbook',
		description: 'Apple',
		price: '10TL',
		image:
			'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1603332211000',
	},
];

const Products = () => {
	const classes = useStyles();

	return (
		<main>
			<Grid container justify='center' spacing={4}>
				{products.map((product) => (
					<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
						<Product product={product} />
					</Grid>
				))}
			</Grid>
		</main>
	);
};

export default Products;
