import React from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

export const Payment = () => {
	const history = useHistory();
	return (
		<div className="container">
			<div className="row d-flex justify-content-center my-5">
				<div className="col-md-4 order-md-1">
					<form className="needs-validation" noValidate>
						<hr className="mb-4" />

						<h4 className="mb-4 text-center">Inserta tu medio de pago</h4>

						<div className="d-flex justify-content-center my-3">
							<div className="custom-control custom-radio mx-3">
								<input
									id="credit"
									name="paymentMethod"
									type="radio"
									className="custom-control-input"
									checked
									required
								/>
								<label className="custom-control-label" htmlFor="credit">
									Tarjeta de crédito
								</label>
							</div>
							<div className="custom-control custom-radio mx-3">
								<input
									id="debit"
									name="paymentMethod"
									type="radio"
									className="custom-control-input"
									required
								/>
								<label className="custom-control-label" htmlFor="debit">
									Tarjeta de débito
								</label>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 mb-4">
								<label htmlFor="cc-name">Nombre en la tarjeta</label>
								<input type="text" className="form-control" id="cc-name" placeholder="" required />
								<small className="text-muted">
									Por favor ingresa el nombre completo, como se muestra en la tarjeta.
								</small>
								<div className="invalid-feedback">Name on card is required</div>
							</div>
							<div className="col-md-12 mb-3">
								<label htmlFor="cc-number">Credit card number</label>
								<input type="text" className="form-control" id="cc-number" placeholder="" required />
								<div className="invalid-feedback">Credit card number is required</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 mb-3">
								<label htmlFor="cc-expiration">Fecha de vencimiento</label>
								<input
									type="text"
									className="form-control"
									id="cc-expiration"
									placeholder=""
									required
								/>
								<div className="invalid-feedback">Expiration date required</div>
							</div>
							<div className="col-md-12 mb-3">
								<label htmlFor="cc-cvv">CVV</label>
								<input type="text" className="form-control" id="cc-cvv" placeholder="" required />
								<div className="invalid-feedback">Security code required</div>
							</div>
						</div>
						<hr className="mb-4" />
						<div
							className="btn btn-success btn-lg btn-block"
							type="submit"
							onClick={event => {
								swal("success", {
									title: "Tu compra fue realizada con exito",
									text:
										"Nos estaremos comunicando contigo pronto para realizar la entrega, ¡gracias por tu compra!",
									icon: "success",
									timer: 4200,
									button: false
								}).then(value => {
									history.push("/");
								});
							}}>
							Procesar pago
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
