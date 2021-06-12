import React from "react";
import Broccoli from "./../../img/svg/broccoli.png";
import PropTypes from "prop-types";

export const Category = props => {
	if (props.category == "Tiendas") {
		console.log(props.category);
	}
	if (props.category == "Ubicación") {
		console.log(props.category);
	}
	return (
		<div
			className={`
                category
                ${props.category == "Ubicación" ? "large" : ""}
                ${props.category == "Tiendas" ? "large" : ""}
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
                        category__logo--img
                        ${props.category == "Ubicación" ? "" : props.category == "Tiendas" ? "" : "shadow"}
                        
                    `}
					style={{ backgroundColor: props.color }}>
					<img src={Broccoli} alt="" width="60" />
				</div>
			</div>
			<div className={`category__info`}>
				<h3 className="category__info--title">{`${props.category}`}</h3>
				<p className="category__info--paragraph">
					{` Lorem ipsum dolor sit, amet consectetur adipisicing elit.`}
				</p>
			</div>
		</div>
	);
};
Category.propTypes = {
	color: PropTypes.string,
	category: PropTypes.string
};
