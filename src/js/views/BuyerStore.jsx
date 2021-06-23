import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Store } from "./../component/Store.jsx";

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
			{store.buyer.stores.map(store => {
				return <Store storeData={store} key={store.id} />;
			})}
		</div>
	);
};
