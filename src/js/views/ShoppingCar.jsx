import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const ShoppingCar = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getShoppingCar(1);
	}, []);
	return (
		<React.Fragment>
			{store.user.token && store.user.role == "buyer" ? (
				<div className="container">
					<h3>Este es el carrito</h3>
				</div>
			) : (
				<Redirect to="/login" />
			)}
		</React.Fragment>
	);
};
