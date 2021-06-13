import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
	return (
		<div className="form-view">
			<div className="form">
				<div className="form__title">
					<h2>Inicia sesión</h2>
				</div>
				<form className="form__info" action="">
					<div className="form__info--inputs">
						<input type="email" className="input__field" id="email" placeholder="Correo electrónico" />
						<p>Nunca compartiremos tu correo con terceros</p>
						<input type="password" className="input__field" id="password" placeholder="Contraseña" />
					</div>
					<div className="form__send">
						<Link to="/" className="form__send--button ">
							<div className="login-btn">Ingresar</div>
						</Link>
						<div className="form__sign">
							<p className="form__sign--text">¿Aún no tienes una cuenta?</p>
							<Link to="/signup" className="form__sign--link">
								Regístrate
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
