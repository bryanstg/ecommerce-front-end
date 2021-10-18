import React from "react";
import { Category } from "./Category.jsx";
import Vegetales from "./../../img/svg/broccoli.png";
import Frutas from "./../../img/svg/manzana.png";
import Tiendas from "./../../img/svg/tiendas.png";
import Dulces from "./../../img/svg/dulce.png";
import Licores from "./../../img/svg/licor.png";
import Ubicación from "./../../img/svg/ubicacion.png";

export const Categories = () => {
	const colors = ["#DBFA6E", "#FA7261", "#87FAC0", "#C587E4", "#43db76", "#DBFA6E"];
	const categories = [
		{
			category: "Frutas",
			url: Frutas,
			info: "Consigue una inmesa variedad de frutas y apoya el mercado local."
		},
		{
			category: "Vegetales",
			url: Vegetales,
			info: "Consígue los más frescos y de alta calidad de la cuadra."
		},
		{
			category: "Tiendas",
			url: Tiendas,
			info: "Tu decides en que tienda comprar. Realiza tu busqueda por tiendas también."
		},
		{
			category: "Dulces",
			url: Dulces,
			info: "¿Noche de películas? Consigue los dulces que necesites y recíbelos en la comodida de tu hogar."
		},
		{
			category: "Licores",
			url: Licores,
			info: "¿De fiesta? Consigue todo lo que necesitas con nosotros."
		},
		{
			category: "Ubicación",
			url: Ubicación,
			info: "Encuentra la tienda que mejor se acomode a tu ubicación. Entregas más rápidas, clientes más felices."
		}
	];
	return (
		<div className="container">
			<h2>Categorías</h2>
			<div className="categories" id="categories">
				{categories.map((element, index) => {
					return <Category color={colors[index]} category={element} key={index} />;
				})}
			</div>
		</div>
	);
};
