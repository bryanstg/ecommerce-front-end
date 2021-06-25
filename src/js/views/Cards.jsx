import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Cards = ({ product, storeId }) => {
	const { store, actions } = useContext(Context);

	return (
		<div className="">
			<div className="">
				<div className="shadow tarjeta">
					<div className="sub-tarjeta">
						<img src={product.img_url} className="tarjeta__logo--img" />
					</div>
					<div className="product__info--title">{product.name}</div>

					<div className="product__info--description">{product.description}</div>
					<div
						className={`add-btn signup-btn`}
						onClick={async event => {
							const buyerId = store.user.info.user_buyer.id;
							const productId = product.id;
							const quantity = 1; //Default quantity
							const addToCar = await actions.createProductToBuy(buyerId, quantity, productId);
						}}>
						Agregar al carrito
					</div>
				</div>
			</div>
		</div>
	);
};

Cards.propTypes = {
	product: PropTypes.object,
	storeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
