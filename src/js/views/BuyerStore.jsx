import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory, useParams } from "react-router-dom";
import { Shelf } from "./../component/Shelf.jsx";

export const BuyerStore = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const history = useHistory();

	if (store.user.token && store.user.role == "buyer") {
		useEffect(() => {
			actions.getAllStores();
			actions.getAllProductsActive();
		}, []);
	} else {
		history.push("/");
	}
	return (
		<React.Fragment>
			<div className="container">
				<button
					className="logout"
					onClick={event => {
						actions.logOut();
					}}>
					Cerrar sesión
				</button>
				<div>
					{store.buyer.stores.map(store => {
						return <Shelf storeData={store} key={store.id} />;
					})}
				</div>
			</div>
		</React.Fragment>
	);
};
