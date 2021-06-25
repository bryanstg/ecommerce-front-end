import React, { useState } from "react";
import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Product } from "./Product.jsx";

export const Shelf = ({ storeData }) => {
	const { store, actions } = useContext(Context);
	const [products, setProducts] = useState([]);

	const getProducts = async () => {
		const response = await actions.getProductsbuyer(storeData.id);
		if (response) {
			console.log(response);
			setProducts(response.products);
		}
	};
	useEffect(() => {
		getProducts();
	}, []);
	console.log(storeData);
	console.log(products);
	return (
		<div>
			<h2>{storeData.name}</h2>
			<div>{storeData.description}</div>
			<div>{storeData.id}</div>
			<div>
				{products !== [] ? (
					products.map(product => {
						return <Product product={product} key={product.id} />;
					})
				) : (
					<div className="spinner-border text-success" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				)}
				;
			</div>
		</div>
	);
};

Shelf.propTypes = {
	storeData: PropTypes.object
};
