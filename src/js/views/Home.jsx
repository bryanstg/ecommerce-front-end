import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div className="container vw-100 vh-100">
			<div className="call-to-action d-flex flex-column align-items-center justify-content-center">
				<Link to="/login">
					<a className={`btn signup-btn`} href="#">
						Regístrate
					</a>
				</Link>
				<div>
					<p className="call-to-action__p d-flex flex-column align-items-center">
						<span>o</span>
						<span>continúa</span>
						<span>comprando</span>
					</p>
					<img className="call-to-action__img" src="" alt="" />
				</div>
			</div>
		</div>
	);
};
