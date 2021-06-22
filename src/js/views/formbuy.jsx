import React from "react";
import { Link } from "react-router-dom";

export const Formbuy = () => {
	return (
		<div className="formbuy-view">
			<div className="formbuy">
				<div className="formbuy__title">
					<h2>Registrate como Comprador</h2>
				</div>
				<form className="formbuy__info" action="">
					<div className="formbuy__info--inputs">
						<input type="text" className="input__field__buy" placeholder="Nombre" />
						<input type="text" className="input__field__buy" placeholder="Apellido" />
						<input type="tel" className="input__field__buy" placeholder="Numero telefonico" />
						<input type="text" className="input__field__buy" placeholder="Direccion" />
						<input type="email" className="input__field__buy" placeholder="Correo electrónico" />
						<input type="password" className="input__field__buy" placeholder="Contraseña" />
						<br />
						<br />
					</div>
					<div className="formbuy__send">
						<Link to="/" className="formbuy__send--button ">
							<div className="formbuy-btn">Ingresar</div>
						</Link>
						<div className="formbuy__sign">
							<p className="formbuy__sign--text">¿Aún no tienes una cuenta?</p>
							<Link to="/signup" className="formbuy__sign--link">
								Regístrate
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
