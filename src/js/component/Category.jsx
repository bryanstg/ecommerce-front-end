import React from "react";

import PropTypes from "prop-types";

export const Category = props => {
	console.log(typeof props.category, props.category);
	return (
		<div
			className={`
                category
                ${props.category == "Ubicación" ? "shadow" : ""}
                ${props.category == "Tiendas" ? "shadow" : ""}
            `}
			style={
				props.category == "Tiendas"
					? { backgroundColor: props.color }
					: props.category == "Ubicación"
						? { backgroundColor: props.color }
						: {}
			}>
			<div className={`category__logo`}>
				<div
					className={`
                        ${
							props.category == "Ubicación"
								? ""
								: props.category == "Tiendas"
									? ""
									: "shadow category__logo--img"
						}
                        
                    `}
					style={{ backgroundColor: props.color }}>
					<img src={props.category.url} alt="" width="60" />
				</div>
			</div>
			<div className={`category__info`}>
				<h3 className="category__info--title">{`${props.category.category}`}</h3>
				<p className="category__info--paragraph">{props.category.info}</p>
			</div>
		</div>
	);
};
Category.propTypes = {
	color: PropTypes.string,
	category: PropTypes.object
};
