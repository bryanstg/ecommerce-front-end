import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import MainView from "./../../img/mobile-mainview.png";
import { Categories } from "../component/Categories.jsx";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	if (store.user.token && store.user.role == "seller") {
		const sellerId = store.user.info.user_seller.id;
		history.push(`/${sellerId}/store`);
	} else if (store.user.token && store.user.role == "buyer") {
		history.push(`/buyer-store`);
	}

	return (
		<div className="container-fluid vh-auto">
			<div className="main-view pb-3 px-2">
				<div className="main-view__text">
					<h1 className="main-view__text--title">
						<span className="main-view__text--title-first">LA</span>
						<br />
						<span className="main-view__text--title-second">CUADRA</span>
					</h1>
					<p className="main-view__text--paragraph">
						El market online donde puedes conseguir gran variedad de artículos consumibles y
						establecimientos muy cerca de ti a un excelente precio.
					</p>
				</div>
				<div className="call-to-action">
					<Link to="/signup-buyer" className={`btn signup-btn`} href="#">
						Regístrate
					</Link>
					<div className="d-flex flex-column justify-content-center align-items-center">
						{/* <p className="call-to-action__p d-flex flex-column align-items-center">
							<span>o</span>
							<span>continúa comprando</span>
						</p> 
						<i className="fas fa-chevron-down" />
						*/}
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
