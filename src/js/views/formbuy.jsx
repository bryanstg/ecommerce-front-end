import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Formbuy = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [idNumber, setIdNumber] = useState("");
	const [cellphoneNumber, setCellphoneNumber] = useState("");
	const [address, setAddress] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="formbuy-view">
			<div className="formbuy">
				<div className="formbuy__title">
					<h2>Registrate como Comprador</h2>
				</div>
				<form className="formbuy__info" action="">
					<div className="formbuy__info--inputs">
						<input
							type="text"
							className="input__field__buy"
							placeholder="Nombre"
							value={firstName}
							onChange={event => {
								setFirstName(event.target.value);
							}}
						/>
						<input
							type="text"
							className="input__field__buy"
							placeholder="Apellido"
							value={lastName}
							onChange={event => {
								setLastName(event.target.value);
							}}
						/>
						<input
							type="text"
							className="input__field__buy"
							placeholder="Cédula de identidad"
							value={idNumber}
							onChange={event => {
								setIdNumber(event.target.value);
							}}
						/>
						<input
							type="tel"
							className="input__field__buy"
							placeholder="Numero telefonico"
							value={cellphoneNumber}
							onChange={event => {
								setCellphoneNumber(event.target.value);
							}}
						/>
						<input
							type="text"
							className="input__field__buy"
							placeholder="Direccion"
							value={address}
							onChange={event => {
								setAddress(event.target.value);
							}}
						/>
						<input
							type="email"
							className="input__field__buy"
							placeholder="Correo electrónico"
							value={email}
							onChange={event => {
								setEmail(event.target.value.toLowerCase());
							}}
						/>
						<input
							type="password"
							className="input__field__buy"
							placeholder="Contraseña"
							value={password}
							onChange={event => {
								setPassword(event.target.value);
							}}
						/>
						<br />
						<br />
					</div>
					<div className="formbuy__send">
						<div className="formbuy__send--button ">
							<button
								className="formbuy-btn"
								onClick={async event => {
									event.preventDefault();
									let success = false;

									if (
										firstName === "" ||
										lastName === "" ||
										idNumber === "" ||
										cellphoneNumber === "" ||
										address === "" ||
										email === "" ||
										password === ""
									) {
										return swal({
											title: "Por favor intenta nuevamente",
											text: "Uno de los campos ingresados es incorrecto",
											icon: "warning"
										});
									} else {
										success = await actions.signupBuyer(
											firstName,
											lastName,
											idNumber,
											cellphoneNumber,
											address,
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
								Registrar
							</button>
						</div>
						<div className="formbuy__sign">
							<p className="formbuy__sign--text">¿Aún no tienes una cuenta?</p>
							<Link to="/login" className="formbuy__sign--link">
								Inicia sesión
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
