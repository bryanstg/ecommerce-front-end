import React, { Component } from "react";

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__section">
				<ul>
					<li className="footer__section--li">
						<h2>Servicio al cliente</h2>
					</li>
					<li className="footer__section--li">
						<a rel="" href="#">
							Preguntas frecuentes
						</a>
					</li>
					<li className="footer__section--li">
						<a rel="" href="#">
							Términos y condiciones
						</a>
					</li>
					<li className="footer__section--li">
						<a rel="" href="#">
							Privacidad y Seguridad
						</a>
					</li>
				</ul>
			</div>
			<div className="footer__section">
				<ul>
					<li className="footer__section--li">
						<h2>Para empresas</h2>
					</li>
					<li className="footer__section--li">
						<a rel="" href="#">
							Registra tu negocio
						</a>
					</li>
					<li className="footer__section--li">
						<a rel="" href="#">
							Inicia sesión como empresa
						</a>
					</li>
					<li className="footer__section--li">
						<a rel="" href="#">
							Preguntas frecuentes
						</a>
					</li>
				</ul>
			</div>
			<div className="footer__section">
				<ul>
					<li className="footer__section--li">
						<h2>Sobre Nosotros</h2>
					</li>
					<li className="footer__section--li">
						<a rel="" href="#">
							Nosotros
						</a>
					</li>
					<li className="footer__section--li">
						<a rel="" href="#">
							Contáctanos
						</a>
					</li>
					<li className="footer__section--li">
						<a rel="" href="#">
							Vende con nosotros
						</a>
					</li>
				</ul>
			</div>
			<div className="footer__copyr">
				<span>Copy Right © 2021 </span>
			</div>
		</footer>
	);
};
