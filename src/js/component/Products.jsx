import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Product } from "./Product.jsx";
import { useHistory } from "react-router-dom";

export const Products = ({ type }) => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	let products;
	if (type === "sin stock") {
		products = store.seller.storeData.products.filter(product => {
			return product.amount_available == 0;
		});
	} else if (type === "inactivos") {
		products = store.seller.storeData.products.filter(product => {
			return product.active === false && product.amount_available > 0;
		});
	} else if (type === "activos") {
		products = store.seller.storeData.products.filter(product => {
			return product.active === true && product.amount_available > 0;
		});
	} else {
		throw new Error("Por favor ingresa un tipo válido");
	}
	return (
		<div className="products--box">
			<div className="products ">
				<div className="products__title">
					<h3>
						{`Productos ${type}`}
						<a
							href=""
							onClick={event => {
								const stock = "sin-stock";
								if (type !== "sin stock") {
									history.push(`/${store.seller.storeData.info.id}/products/${type}`);
								} else {
									history.push(`/${store.seller.storeData.info.id}/products/${stock}`);
								}
							}}>
							ver todos...
						</a>
					</h3>
				</div>
				<div className="products__element">
					{products.map((product, index) => {
						if (index < 4) {
							return <Product product={product} key={product.id} />;
						}
					})}
				</div>
			</div>
		</div>
	);
};
Products.propTypes = {
	type: PropTypes.string
};
