import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export const Card = () => {
	return (
		<div className="container-fluid vw-100 vh-auto">
			<Row>
				<div className=" shadow tarjeta">
					<div className="sub-tarjeta">
						<div className="shadow tarjeta__logo--img">Foto del Producto</div>
					</div>
					<div className=" product__info--title">Mario</div>

					<div className="product__info--description">Escribiendo mucha informacio vaga</div>
					<Link to="/login" className={`btn signup-btn`} href="#">
						Agregar
					</Link>
				</div>
			</Row>

			<div className="main-view pb-3 px-2">
				<div className="d-flex flex-column justify-content-center align-items-center">
					<p className="call-to-action__p d-flex flex-column align-items-center">
						<span>continúa comprando</span>
					</p>
				</div>
			</div>
		</div>
	);
};
