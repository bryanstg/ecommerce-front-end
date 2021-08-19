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
	const [categoryId, setCategoryId] = useState("");
	const [activateProduct, setActivateProduct] = useState(null);

	const [cloudImage, setCloudImage] = useState("");

	async function postPictureCloudinary() {
		const formData = new FormData();
		formData.append("file", cloudImage);
		formData.append("upload_preset", "p9yx5kaa");

		const response = await fetch(`https://api.cloudinary.com/v1_1/bryancloudinary/image/upload`, {
			method: "POST",
			body: formData
		});

		if (response.ok) {
			const data = await response.json();
			return data.url;
		}
	}

	return (
		<div className="add-product__container">
			<div className="add-product">
				<div className="add-product__title">
					<h2>Agregar un producto</h2>
				</div>
				<form className="add-product__info" method="post">
					<div className="add-product__info--inputs">
						<input
							className="add-product__field"
							type="text"
							id="product-name"
							placeholder="Nombre del producto"
							value={name}
							onChange={event => {
								setName(event.target.value);
							}}
						/>
						<input
							className="add-product__field"
							type="text"
							id="product-description"
							placeholder="Descripción del producto"
							value={description}
							onChange={event => {
								setDescription(event.target.value);
							}}
						/>
						<input
							className="add-product__field"
							type="text"
							id="product-price"
							placeholder="Precio"
							value={price}
							onChange={event => {
								setPrice(event.target.value);
							}}
						/>
						<input
							className="add-product__field upload__product"
							type="text"
							id="product-amount"
							placeholder="Cantidad disponible"
							value={amountAvailable}
							onChange={event => {
								setAmountAvailable(event.target.value);
							}}
						/>
						<label htmlFor="upload" className={cloudImage !== "" ? "custom-upload ready" : "custom-upload"}>
							<input
								className="add-product__field"
								type="file"
								id="upload"
								onChange={event => {
									setCloudImage(event.target.files[0]);
								}}
							/>
							{cloudImage !== "" ? "Imágen cargada" : "Agregar imágen"}
						</label>
					</div>
					<div className="add-product__info--select">
						<label className="add-product__select--label" htmlFor="categories">
							Categoría:
						</label>
						<select
							className="add-product__select"
							name="category"
							id="categories"
							onClick={event => {
								setCategoryId(event.target.value);
							}}>
							<option className="add-product__select--option" defaultValue value="">
								Selecciona una categoría
							</option>
							{store.categories.map((category, index) => {
								return (
									<option className="add-product__select--option" value={category.id} key={index}>
										{category.name}
									</option>
								);
							})}
						</select>
					</div>
					<div className="add-product__info--radio" id="product-status">
						<h3>¿Deseas que el producto sea activado una vez creado?</h3>
						<label htmlFor="true">Sí</label>
						<input
							id="true"
							className="add-product__radio"
							type="radio"
							value={true}
							name="active"
							onChange={event => {
								setActivateProduct(true);
							}}
						/>
						<label htmlFor="false">No</label>
						<input
							id="false"
							className="add-product__radio"
							type="radio"
							value={false}
							name="active"
							onChange={event => {
								setActivateProduct(false);
							}}
						/>
					</div>
					<div className="add-product__send">
						<button
							className="add-product__btn login-btn"
							onClick={async event => {
								event.preventDefault();
								let success = false;
								if (
									name == "" ||
									description == "" ||
									price == "" ||
									amountAvailable == "" ||
									categoryId == "" ||
									activateProduct == null ||
									cloudImage == ""
								) {
									return swal(
										"Intenta nuevamente",
										"	Todos los campos son requeridos y los debes llenar correctamente",
										"info"
									);
								} else {
									const imgUrl = await postPictureCloudinary();

									const storeId = store.seller.storeData.info.id;
									success = await actions.createProduct({
										name,
										description,
										price,
										amountAvailable,
										imgUrl,
										categoryId,
										activateProduct,
										storeId
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
