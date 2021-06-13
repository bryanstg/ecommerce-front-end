import React from "react";
import { Link } from "react-router-dom";
import MainView from "./../../img/mobile-mainview.png";
import { Categories } from "../component/Categories.jsx";

export const Home = () => {
	return (
		<div className="container-fluid vw-100 vh-auto">
			<div className="main-view pb-3 px-2">
				<div className="main-view__text">
					<h1 className="main-view__text--title">
						<span className="main-view__text--title-first">LOREM</span>
						<br />
						<span className="main-view__text--title-second">IPSUM</span>
					</h1>
					<p className="main-view__text--paragraph">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur
						adipisicing elit.
					</p>
				</div>
				<div className="call-to-action">
					<Link to="/login" className={`btn signup-btn`} href="#">
						Regístrate
					</Link>
					<div className="d-flex flex-column justify-content-center align-items-center">
						<p className="call-to-action__p d-flex flex-column align-items-center">
							<span>o</span>
							<span>continúa comprando</span>
						</p>
						<i className="fas fa-chevron-down" />
					</div>
				</div>
				<div className="main-view__design">
					<img src={MainView} className="main-view__design--mobile" alt="" />
				</div>
			</div>
			<Categories />
		</div>
	);
};
