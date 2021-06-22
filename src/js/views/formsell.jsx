import React, { useContext, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Context } from "../store/appContext";
import swal from "sweetalert";

export const Formsell = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [companyName, setCompanyName] = useState("");
	const [identificationNumber, setIdentificationNumber] = useState("");
	const [cellphoneNumber, setCellphoneNumber] = useState("");
	const [storeName, setStoreName] = useState("");
	const [storeDescription, setStoreDescription] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="formsell-view">
			<div className="formsell">
				<div className="formsell__title">
					<h2>Registrate como Vendedor</h2>
				</div>
				<form className="formsell__info" action="">
					<div className="formsell__info--inputs">
						<input
							type="text"
							className="input__field__sell"
							id="password"
							placeholder="Nombre de la empresa"
							value={companyName}
							onChange={event => {
								setCompanyName(event.target.value);
							}}
						/>
						<input
							type="text"
							className="input__field__sell"
							placeholder="Documento de la empresa (RIF, RUC...)."
							value={identificationNumber}
							onChange={event => {
								setIdentificationNumber(event.target.value);
							}}
						/>
						<input
							type="text"
							className="input__field__sell"
							placeholder="Numero telf empresa"
							value={cellphoneNumber}
							onChange={event => {
								setCellphoneNumber(event.target.value);
							}}
						/>
						<input
							type="text"
							className="input__field__sell"
							placeholder="Nombre de la tienda"
							value={storeName}
							onChange={event => {
								setStoreName(event.target.value);
							}}
						/>
						<input
							type="text"
							className="input__field__sell"
							placeholder="Descripción de la tienda"
							value={storeDescription}
							onChange={event => {
								setStoreDescription(event.target.value);
							}}
						/>
						<input
							type="email"
							className="input__field__sell"
							placeholder="Correo electrónico"
							value={email}
							onChange={event => {
								setEmail(event.target.value);
							}}
						/>
						<input
							type="password"
							className="input__field__sell"
							placeholder="Contraseña"
							value={password}
							onChange={event => {
								setPassword(event.target.value);
							}}
						/>
						<div className="formsell__subtitle">
							<p>Sector de ventas deseado:</p>
							<Row>
								<Col>
									<input type="checkbox" />
									Viveres <br />
									<input type="checkbox" />
									Licores
								</Col>
								<Col>
									<input type="checkbox" />
									Dulces <br />
									<input type="checkbox" />
									Frutas
								</Col>
								<Col>
									<input type="checkbox" />
									Vegetales
								</Col>
							</Row>
						</div>
					</div>
					<div className="formsell__send">
						<Link to="/" className="formsell__send--button ">
							<button
								className="formsell-btn"
								onClick={async event => {
									event.preventDefault();
									let success = false;
									if (
										companyName === "" ||
										identificationNumber === "" ||
										cellphoneNumber === "" ||
										storeName === "" ||
										storeDescription === "" ||
										email === "" ||
										password === ""
									) {
										return swal({
											title: "Por favor intenta nuevamente",
											text: "Uno de los campos ingresados es incorrecto",
											icon: "warning"
										});
									} else {
										success = await actions.signupSeller(
											companyName,
											identificationNumber,
											cellphoneNumber,
											storeName,
											storeDescription,
											email,
											password
										);

										if (success) {
											return history.push("/login");
										} else {
											swal({
												title: "Ocurrió un error",
												text: "Por favor intenta nuevamente",
												icon: "error"
											});
										}
									}
								}}>
								Registrarme
							</button>
						</Link>
						<div className="formsell__sign">
							<p className="formsell__sign--text">¿Ya tienes una cuenta?</p>
							<Link to="/login" className="formsell__sign--link">
								Inicia sesion
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
