import React from "react";
import PropTypes from "prop-types";

export const Store = ({ storeData }) => {
	const storeCategories = storeData.products.categories.filter((cate, index) => {
		/* Filter all the gateories to delete duplicated categories */
		return storeData.products.categories.indexOf(cate) === index;
	});
	console.log();
	return (
		<div className="store-container">
			<div>
				<h2>{storeData.name}</h2>
				<div>{storeData.description}</div>
				<div>
					{
						//RIEL DE PRODUCTOS
					}
				</div>
			</div>
		</div>
	);
};

Store.propTypes = {
	storeData: PropTypes.object
};
