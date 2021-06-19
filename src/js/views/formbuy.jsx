import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Formbuy = () => {
	return (
		<div className="form-view">
			<div className="formbuy">
				<div className="form__title">
					<h2>Registrate como Comprador</h2>
				</div>
				<form className="form__info" action="">
					<div className="form__info--inputs">
						<input type="text" className="input__field" placeholder="Nombre" />
						<input type="text" className="input__field" placeholder="Apellido" />
						<input type="tel" className="input__field" placeholder="Numero telefonico" />
						<input type="text" className="input__field" placeholder="Direccion" />
						<input type="email" className="input__field" placeholder="Correo electrónico" />
						<input type="password" className="input__field" placeholder="Contraseña" />
						<br />
						<br />
					</div>
					<div className="form__send">
						<Link to="/" className="form__send--button ">
							<div className="formsell-btn">Ingresar</div>
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
