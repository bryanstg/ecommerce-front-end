import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const BuyerStore = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const history = useHistory();

	useEffect(() => {
		actions.getStore(params.store_id);
		actions.getProducts(params.store_id);
	}, []);

	const activeProducts = store.buyer.storeData.products.filter(product => {
		if (product.active && product.amount_available > 0) {
			return true;
		} else {
			return false;
		}
	});
	const inactiveProducts = store.buyer.storeData.products.filter(product => {
		if (!product.active && product.amount_available > 0) {
			return true;
		} else {
			return false;
		}
	});

	const outStock = store.buyer.storeData.products.filter(product => (product.amount_available = 0));
	return (
		<div className="store-container">
			{store.buyer.storeData.info.id ? (
				<div className="store">
					<h2 className="store__title">{store.buyer.storeData.info.name}</h2>
					<div className="store__info">
						<a href="" id="" className="store__info--box">
							{`Productos: ${store.buyer.storeData.info.id_products.quantity}`}
						</a>
						<a href="#active" className="store__info--box">
							{`Productos activos: ${activeProducts.length}`}
						</a>
						<a href="#inactive" id="inactivos" className="store__info--box">{`Productos inactivos: ${
							inactiveProducts.length
						}`}</a>
						<a href="#out-stock" className="store__info--box">{`Productos sin stock: ${
							outStock.length
						}`}</a>
					</div>
					<div id="" className="store__add-product">
						<h3 className="store__add-product--title">Agregar producto</h3>
						<button
							type="button"
							className="store__add-product--button"
							onClick={event => {
								history.push(`/:${params.store_id}/add-product`);
							}}>
							<i className="far fa-plus-square fa-2x" />
						</button>
					</div>
					<div id="active" className="store__active">{`active`}</div>
					<div id="inactive" className="store__inactive">{`inactive`}</div>
					<div id="out-stock" className="store__out-stock">{`out-stock`}</div>
				</div>
			) : (
				<div className="spinner-border text-success" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			)}
		</div>
	);
};
