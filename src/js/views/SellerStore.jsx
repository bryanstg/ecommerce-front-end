import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Products } from "../component/Products.jsx";

export const SellerStore = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const history = useHistory();
	if (store.user.token && store.user.role == "seller") {
		useEffect(() => {
			actions.getSpecificStore(params.seller_id);
			actions.getProducts(params.seller_id);
		}, []);
	} else {
		history.push("/");
	}

	const activeProducts = store.seller.storeData.products.filter(product => {
		if (product.active && product.amount_available > 0) {
			return true;
		} else {
			return false;
		}
	});
	const inactiveProducts = store.seller.storeData.products.filter(product => {
		if (!product.active && product.amount_available > 0) {
			return true;
		} else {
			return false;
		}
	});

	const outStock = store.seller.storeData.products.filter(product => product.amount_available == 0);
	return (
		<div className="store-container">
			{store.seller.storeData.info.id ? (
				<div className="store">
					<h2 className="store__title">{store.seller.storeData.info.name}</h2>
					<p>{store.seller.storeData.info.description}</p>
					<button
						className="logout"
						onClick={event => {
							actions.logOut();
						}}>
						Cerrar sesión
					</button>
					<div className="store__info">
						<a href="" className="store__info--box">
							{`Total`}
							<span id="total-box">{store.seller.storeData.info.products.quantity}</span>
						</a>
						<a href="#active" className="store__info--box">
							{`Activos`} <span id="active-box">{activeProducts.length}</span>
						</a>
						<a href="#inactive" className="store__info--box">
							{`Inactivos`}
							<span id="inactive-box">{inactiveProducts.length}</span>
						</a>
						<a href="#out-stock" className="store__info--box">
							{`Sin stock`}
							<span id="out-stock-box">{outStock.length}</span>
						</a>
					</div>
					<div id="" className="store__add-product">
						<h3 className="store__add-product--title">Agregar producto</h3>
						<button
							type="button"
							className="store__add-product--button"
							onClick={event => {
								history.push(`/${store.seller.storeData.info.id}/add-product`);
							}}>
							<i className="far fa-plus-square fa-2x" />
						</button>
					</div>
					<div id="active" className="store__active">
						<Products type="activos" />
					</div>
					<div id="inactive" className="store__inactive">
						<Products type="inactivos" />
					</div>
					<div id="out-stock" className="store__out-stock">
						<Products type="sin stock" />
					</div>
				</div>
			) : (
				<div className="spinner-border text-success" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			)}
		</div>
	);
};
