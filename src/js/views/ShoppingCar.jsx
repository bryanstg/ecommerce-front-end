import React, { useContext, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import shoppingCar from "./../../img/cart.png";
import { ProductToBuy } from "../component/ProductToBuy.jsx";
import swal from "sweetalert";

export const ShoppingCar = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	if (store.user.token && store.user.role == "buyer") {
		useEffect(() => {
			actions.getShoppingCar(store.user.info.user_buyer.id);
		}, []);
	}

	const total = store.buyer.shoppingCar.reduce((acum, curr) => {
		console.log(acum, curr);
		let totalPrice = curr.quantity * curr.product.price;
		console.log(totalPrice);
		return totalPrice + acum;
	}, 0);
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
					<div className="car__send">
						<div className="car__send--info">
							<div className="send-info__total">{`Total: $${total}`}</div>
						</div>
						<div className="send-info__iva">Impuesto incluido</div>
						<div
							className="car__store--send-btn"
							onClick={async event => {
								if (total == 0) {
									swal(
										"Carrito vacio",
										"Debes agregar productos al carrito antes de ir a comprar.",
										"warning"
									).then(value => {
										history.push("/");
									});
								} else {
									history.push("/shopping-car/payment");
								}
							}}>
							{`Ir a pagar`}
						</div>
					</div>
				</div>
			) : (
				<Redirect to="/login" />
			)}
		</React.Fragment>
	);
};
