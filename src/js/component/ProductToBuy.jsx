import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import swal from "sweetalert";

export const ProductToBuy = ({ productToBuy }) => {
	const { store, actions } = useContext(Context);
	const [counter, setCounter] = useState(productToBuy.product.id);
	return (
		<div className="product-buy">
			<div className="product-buy__img">
				<img src={productToBuy.product.img_url} alt="" width="145" />
			</div>
			<div className="product-buy__info">
				<div>
					<div className="product-buy__info--title">
						<h3>{productToBuy.product.name}</h3>
					</div>
					<div className="product-buy__info--description">
						<p>{productToBuy.product.description}</p>
					</div>
				</div>
				<div className="product-buy__info--quantity-box">
					<div className="product-buy__info--price">{`$${productToBuy.product.price}`}</div>
					<div className="product-buy__info--quantity">
						<div
							className="quantity__less quantity-btn"
							onClick={async event => {
								let counterLess;
								if (productToBuy.quantity == "1") {
									swal({
										title: "¿Seguro que quieres eliminarme?",
										text: "Podría hacerte mucha falta",
										icon: "warning",
										buttons: true,
										dangerMode: true
									}).then(willDelete => {
										if (willDelete) {
											const toDelete = actions.deleteProductToBuy(productToBuy.id);
										} else {
											swal("¡Gracias!", "Te lo recompensaré pronto", "success");
										}
									});
								} else {
									counterLess = parseInt(productToBuy.quantity) - 1;

									const updateLess = await actions.updateProductToBuy(productToBuy.id, counterLess);
									if (updateLess) {
										setCounter(counterLess);
									}
								}
							}}>
							-
						</div>
						<div className="quantity__counter">{productToBuy.quantity}</div>
						<div
							className="quantity__add quantity-btn"
							onClick={async event => {
								let counterAdd;
								if (productToBuy.quantity == 10) {
									return true;
								} else {
									counterAdd = parseInt(productToBuy.quantity) + 1;

									console.log(counterAdd);
									const updateAdd = await actions.updateProductToBuy(productToBuy.id, counterAdd);
									if (updateAdd) {
										setCounter(counterAdd);
									}
								}
							}}>
							+
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

ProductToBuy.propTypes = {
	productToBuy: PropTypes.object
};
