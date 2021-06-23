import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/Home.jsx";
import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
import { Login } from "./views/Login.jsx";
import { Formsell } from "./views/formsell.jsx";
import { Formbuy } from "./views/formbuy.jsx";
import { SellerStore } from "./views/SellerStore.jsx";
import { BuyerStore } from "./views/BuyerStore.jsx";
import { AddProduct } from "./views/AddProduct.jsx";
import { ProductManagement } from "./views/ProductManagement.jsx";

import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/car">
							<Login />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/signup-seller">
							<Formsell />
						</Route>
						<Route exact path="/signup-buyer">
							<Formbuy />
						</Route>
						<Route exact path="/:seller_id/store">
							<SellerStore />
						</Route>
						<Route exact path="/buyer-store">
							<BuyerStore />
						</Route>
						<Route exact path="/:store_id/add-product">
							<AddProduct />
						</Route>
						<Route exact path="/:store_id/products/:type">
							<ProductManagement />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
