import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	return (
		<div className="form-view">
			<div className="form">
				<div className="form__title">
					<h2>Inicia sesión</h2>
				</div>
				<form className="form__info" action="">
					<div className="form__info--inputs">
						<input
							type="email"
							className="input__field"
							id="email"
							placeholder="Correo electrónico"
							value={email}
							onChange={event => {
								setEmail(event.target.value);
							}}
						/>
						<p>Nunca compartiremos tu correo.</p>
						<input
							type="password"
							className="input__field"
							id="password"
							placeholder="Contraseña"
							value={password}
							onChange={event => {
								setPassword(event.target.value);
							}}
						/>
					</div>
					<div className="form__send">
						<div className="form__send--button ">
							<button
								className="login-btn add-product__btn"
								onClick={async event => {
									event.preventDefault();
									let verification = await actions.loginUser(email, password);
									if (verification == "seller") {
										let sellerId = store.user.info.user_seller.id;
										history.push(`/${sellerId}/store`);
									} else if (verification == "buyer") {
										history.push("/buyer-store");
									} else {
										swal({
											title: "Ocurrio un error",
											text: "Por favor intenta nuevamente.",
											icon: "error"
										});
									}
								}}>
								Ingresar
							</button>
						</div>
						<div className="form__sign">
							<p className="form__sign--text">¿Aún no tienes una cuenta?</p>
							<Link to="/signup-buyer" className="form__sign--link">
								Regístrate
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
