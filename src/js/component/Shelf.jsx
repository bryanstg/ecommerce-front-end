import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Cards } from "./../views/Cards.jsx";

export const Shelf = ({ storeData }) => {
	const { store, actions } = useContext(Context);

	console.log(storeData);
	console.log(store.allProducts);

	return (
		<div classNAme="store-box">
			<h2 className="store__title">{storeData.name}</h2>
			<div className="store__description">{storeData.description}</div>
			<div className="store-riel">
				{store.allProducts.length !== [] ? (
					store.allProducts.map(product => {
						if (product.store_id == storeData.id && product.amount_available > 0) {
							return <Cards product={product} storeId={storeData.id} key={product.id} />;
						}
					})
				) : (
					<div className="spinner-border text-success" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				)}
			</div>
		</div>
	);
};

Shelf.propTypes = {
	storeData: PropTypes.object
};
