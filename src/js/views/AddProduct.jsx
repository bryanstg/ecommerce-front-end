import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import swal from "sweetalert";
import { useHistory, useParams } from "react-router-dom";

export const AddProduct = () => {
	const { store, actions } = useContext(Context);

	const params = useParams();
	const history = useHistory();

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [amountAvailable, setAmountAvailable] = useState("");
	const [imgUrl, setImgUrl] = useState("");
	const [categoryId, setCategoryId] = useState("");
	const [activateProduct, setActivateProduct] = useState(null);

	return (
		<div className="add-product__container">
			<div className="form">
				<div className="form__title">
					<h2>Agregar un producto</h2>
				</div>
				<form className="form__info" action="">
					<div className="form__info--inputs">
						<input
							type="text"
							className="input__field"
							id="product-name"
							placeholder="Nombre del producto"
							value={name}
							onChange={event => {
								setName(event.target.value);
							}}
						/>
						<input
							type="text"
							className="input__field"
							id="product-description"
							placeholder="Descripción del producto"
							value={description}
							onChange={event => {
								setDescription(event.target.value);
							}}
						/>
						<input
							type="text"
							className="input__field"
							id="product-price"
							placeholder="Precio"
							value={price}
							onChange={event => {
								setPrice(event.target.value);
							}}
						/>
						<input
							type="text"
							className="input__field"
							id="product-amount"
							placeholder="Cantidad disponible"
							value={amountAvailable}
							onChange={event => {
								setAmountAvailable(event.target.value);
							}}
						/>
						<input
							type="text"
							className="input__field"
							id="prouct-img"
							placeholder="Url de la imagen"
							value={imgUrl}
							onChange={event => {
								setImgUrl(event.target.value);
							}}
						/>

						<label className="" htmlFor="categories">
							Categoría:
						</label>
						<select
							name="category"
							id="categories"
							onClick={event => {
								setCategoryId(event.target.value);
							}}>
							<option defaultValue value="">
								Selecciona una categoría
							</option>
							{store.buyer.categories.map((category, index) => {
								return (
									<option id="" className="" value={category.id} key={index}>
										{category.name}
									</option>
								);
							})}
						</select>
						<div className="" id="product-status">
							<p>¿Deseas que el producto sea activado una vez creado?</p>
							<label htmlFor="true">Sí</label>
							<input
								type="radio"
								id="true"
								value={true}
								name="active"
								onChange={event => {
									setActivateProduct(true);
								}}
							/>
							<label htmlFor="false">No</label>
							<input
								type="radio"
								id="false"
								value={false}
								name="active"
								onChange={event => {
									setActivateProduct(false);
								}}
							/>
						</div>
					</div>
					<div className="form__send">
						<button
							className="login-btn"
							onClick={async event => {
								event.preventDefault();
								let success = false;
								if (
									name == "" ||
									description == "" ||
									price == "" ||
									amountAvailable == "" ||
									imgUrl == "" ||
									categoryId == "" ||
									activateProduct == null
								) {
									console.log("ingresé");

									return swal(
										"Intenta nuevamente",
										"Todos los campos son requeridos y los debes llenar correctamente",
										"info"
									);
								} else {
									console.log(name);
									success = await actions.createProduct({
										name,
										description,
										price,
										amountAvailable,
										imgUrl,
										categoryId,
										activateProduct
									});
								}
								if (success) {
									swal("¡Excelente!", "Tu producto fue creado satisfactoriamente", "success").then(
										value => {
											history.goBack();
										}
									);
								} else {
									swal("Ocurrio un error", "Por favor agrega tu producto nuevamente", "error").then(
										value => {
											history.goBack();
										}
									);
								}
							}}>
							Crear producto
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
