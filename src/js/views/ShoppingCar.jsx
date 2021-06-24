import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import shoppingCar from "./../../img/cart.png";
import { ProductToBuy } from "../component/ProductToBuy.jsx";

export const ShoppingCar = () => {
	const { store, actions } = useContext(Context);
	if (store.user.token && store.user.role == "buyer") {
		useEffect(() => {
			actions.getShoppingCar(store.user.info.user_buyer.id);
		}, []);
	}
	return (
		<React.Fragment>
			{store.user.token && store.user.role == "buyer" ? (
				<div className="car-container">
					<div className="car__title">
						<h3>
							Carrito de
							<br />
							<span>Compras</span>
						</h3>
						<img src={shoppingCar} alt="" width="120" />
					</div>
					<div className="car__store">
						{store.buyer.shoppingCar.map(productToBuy => {
							return <ProductToBuy key={productToBuy.id} productToBuy={productToBuy} />;
						})}
					</div>
				</div>
			) : (
				<Redirect to="/login" />
			)}
		</React.Fragment>
	);
};
