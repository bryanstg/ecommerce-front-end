import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Formsell = () => {
	return (
		<div className="form-view">
			<div className="formsell">
				<div className="form__title">
					<h2>Registrate como Vendedor</h2>
				</div>
				<form className="form__info" action="">
					<div className="form__info--inputs">
						<input type="text" className="input__field" id="password" placeholder="Nombre de la empresa" />
						<input
							type="text"
							className="input__field"
							placeholder="Documento de
							identificación de la empresa (RIF, RUC...)."
						/>
						<input type="tel" className="input__field" placeholder="Numero telf empresa" />
						<input type="email" className="input__field" placeholder="Correo electrónico" />
						<input type="password" className="input__field" placeholder="Contraseña" />
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
