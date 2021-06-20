import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../component/Product.jsx";
import { Context } from "../store/appContext";

export const ProductManagement = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getStore(params.store_id);
		actions.getProducts(params.store_id);
	}, []);

	let products;
	if (params.type === "sin-stock") {
		products = store.buyer.storeData.products.filter(product => {
			return product.amount_available == 0;
		});
	} else if (params.type === "inactivos") {
		products = store.buyer.storeData.products.filter(product => {
			return product.active === false && product.amount_available > 0;
		});
	} else if (params.type === "activos") {
		products = store.buyer.storeData.products.filter(product => {
			return product.active === true && product.amount_available > 0;
		});
	} else {
		throw new Error("Por favor ingresa un tipo válido");
	}

	return (
		<div className="product-management">
			<h2 className="product-management__title">{`Productos ${params.type}`}</h2>
			<div className="product-management__products">
				{products.map(product => {
					return <Product product={product} key={product.id} />;
				})}
			</div>
		</div>
	);
};
