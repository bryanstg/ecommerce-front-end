import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<React.Fragment>
			<nav className="navbar navbar-light bg-light mb-3">
				<div className="ml-auto">
					<Link to="/demo">
						<span className="">Car
							<img src="" alt="" />
						</span>
					</Link>
				</div>
				<Link to="/">
					<span className="navbar-brand mb-0 h1">eCommerce</span>
				</Link>
			</nav>

			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Navbar
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo02"
						aria-controls="navbarTogglerDemo02"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Link
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link " href="#" tabIndex="-1" aria-disabled="true">
									Disabled
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</React.Fragment>
	);
};
