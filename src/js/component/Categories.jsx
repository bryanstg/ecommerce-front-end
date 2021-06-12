import React from "react";
import { Category } from "./Category.jsx";

export const Categories = () => {
	const colors = ["#DBFA6E", "#FA7261", "#87FAC0", "#C587E4", "#43db76", "#DBFA6E"];
	const categories = ["Frutas", "Vegetales", "Tiendas", "Dulces", "Licores", "Ubicación"];
	return (
		<div className="categories" id="categories">
			{categories.map((element, index) => {
				return <Category color={colors[index]} category={element} key={index} />;
			})}
		</div>
	);
};
