import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import shoppingCar from "./../../img/svg/carrito-compras.png";
import { ShoppingCar } from "./../views/ShoppingCar.jsx";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<React.Fragment>
			<div className="pos-f-t">
				<div className="collapse" id="navbarToggleExternalContent">
					<ul className="navbar-nav navigation__list bg-ligth mr-auto mt-2 mt-lg-0">
						<li className="nav-item active navigation__list--item">
							<Link to="/login" className="nav-personalize nav-link" href="#">
								Iniciar Sesion
							</Link>
						</li>
						<li className="nav-item navigation__list--item">
							<Link to="/signup-buyer" className="nav-link" href="#">
								Regístrate
							</Link>
						</li>
						<li className="nav-item navigation__list--item">
							<a className="nav-link navigation__list--item" href="#categories">
								Categorías
							</a>
						</li>
					</ul>
				</div>
			</div>
			<nav className="navbar navigation navbar-light bg-light px-2 py-2 pt-2">
				<button
					className="navbar-toggler px-2 py-1"
					type="button"
					data-toggle="collapse"
					data-target="#navbarToggleExternalContent"
					aria-controls="navbarToggleExternalContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<Link to="/" className="brand-name navbar-brand" href="#">
					LA CUADRA
				</Link>
				<div className="sign-bar">
					<Link to="/signup-buyer" className={`btn signup-btn d-none d-md-inline-block`} href="#">
						Regístrate
					</Link>
					<Link to="/shopping-car" className="car-icon">
						<img src={shoppingCar} alt="" className="car-icon__logo" />
						<span className="car-icon__counter ">{store.buyer.shoppingCar.length}</span>
					</Link>
				</div>
			</nav>
		</React.Fragment>
	);
};
