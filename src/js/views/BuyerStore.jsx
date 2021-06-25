import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Shelf } from "./../component/Shelf.jsx";
import { Products } from "../component/Products.jsx";
import PropTypes from "prop-types";

export const BuyerStore = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const history = useHistory();

	if (store.user.token && store.user.role == "buyer") {
		useEffect(() => {
			actions.getAllStores();
		}, []);
	} else {
		history.push("/");
	}
	return (
		<div className="container">
			<div />
			{store.buyer.stores.map(store => {
				return <Shelf storeData={store} key={store.id} />;
			})}
			<div />
		</div>
	);
};
