import React from "react";
import PropTypes from "prop-types";

export const Product = ({ product }) => {
	return (
		<div className="product">
			<div className="product__img">
				<img src={product.img_url} alt={product.name} />
			</div>
			<div className="product__info">
				<div className="product__info--title">
					<h4>{product.name}</h4>
				</div>
				<div className="product__info--description">
					<div className="product__description--">{`Descripción: ${product.description}`}</div>
					<div className="product__description--">{`Precio: $${product.price}`}</div>
					<div className="product__description--">{`Disponibilidad: ${product.amount_available}`}</div>
					<div className="product__description--">{`Categoría: ${product.category.name}`}</div>
				</div>
			</div>
		</div>
	);
};

Product.propTypes = {
	product: PropTypes.object
};
