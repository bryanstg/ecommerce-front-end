import React from "react";
import Vegetales from "./../../img/svg/broccoli.png";
import Frutas from "./../../img/svg/manzana.png";
import Tiendas from "./../../img/svg/tiendas.png";
import Dulces from "./../../img/svg/dulce.png";
import Licores from "./../../img/svg/licor.png";
import Ubicación from "./../../img/svg/ubicacion.png";

import PropTypes from "prop-types";
const img = [Vegetales, Frutas, Tiendas, Dulces, Ubicación, Licores];

export const Category = props => {
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
					<img src={Tiendas} alt="" width="60" />
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
