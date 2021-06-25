const getState = ({ getStore, getActions, setStore, setActions }) => {
	const API_URI = "http://127.0.0.1:3000";
	return {
		store: {
			user: {
				role: "",
				token: "",
				info: {}
			},
			categories: [],
			seller: {
				storeData: {
					info: {},
					products: []
				}
			},
			buyer: {
				stores: [],
				shoppingCar: [],
				storeProducts: []
			}
		},
		actions: {
			signupSeller: async (
				companyName,
				identificationNumber,
				cellphoneNumber,
				storeName,
				storeDescription,
				email,
				password
			) => {
				//Sigup a new seller
				try {
					const create = await fetch(`${API_URI}/signup-seller`, {
						method: "POST",
						body: JSON.stringify({
							company_name: companyName,
							identification_number: identificationNumber,
							cellphone_number: cellphoneNumber,
							name: storeName,
							description: storeDescription,
							email: email,
							password: password
						}),
						headers: {
							"Content-Type": "application/json"
						}
					});

					if (create.ok) {
						return true;
					} else {
						throw new Error("Ocurrió un problema al crear");
					}
				} catch (error) {
					return false;
				}
			},
			signupBuyer: async (firstName, lastName, idNumber, cellphoneNumber, address, email, password) => {
				//Sigup a new seller
				try {
					const create = await fetch(`${API_URI}/signup-buyer`, {
						method: "POST",
						body: JSON.stringify({
							first_name: firstName,
							last_name: lastName,
							id_number: idNumber,
							cellphone_number: cellphoneNumber,
							address: address,
							email: email,
							password: password
						}),
						headers: {
							"Content-Type": "application/json"
						}
					});

					if (create.ok) {
						return true;
					} else {
						throw new Error("Ocurrió un problema al crear el usuario comprador");
					}
				} catch (error) {
					return false;
				}
			},
			loginUser: async (email, password) => {
				// Log in a user
				const store = getStore();
				const actions = getActions();

				const userCredencial = {
					email: email,
					password: password
				};

				try {
					//Credencials verification
					const logUser = await fetch(`${API_URI}/login`, {
						method: "POST",
						body: JSON.stringify(userCredencial),
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (logUser.ok) {
						const data = await logUser.json();
						setStore({
							user: {
								token: data.jwt,
								role: data.role,
								info: {
									...data.user
								}
							}
						});
						localStorage.setItem("token", data.jwt);
						localStorage.setItem("user", JSON.stringify(data.user));
						localStorage.setItem("role", data.role);
						if (data.role == "seller") {
							//Seller user
							return "seller";
						} else if (data.role == "buyer") {
							//Buyer user
							return "buyer";
						} else {
							throw new Error("Ocurrió un error, intenta nuevamente");
						}
					}
				} catch (error) {
					console.log(error);
				}
			},
			logOut: () => {
				setStore({
					user: {
						token: "",
						role: "",
						info: {}
					}
				});
				localStorage.removeItem("token");
				localStorage.removeItem("user");
				localStorage.removeItem("role");
			},
			setToken: (token, user, role) => {
				setStore({
					user: {
						token: token,
						role: role,
						info: JSON.parse(user)
					}
				});
			},
			getAllStores: async () => {
				const actions = getActions();
				const store = getStore();
				//Get all the stores availables

				try {
					const response = await fetch(`${API_URI}/stores`);
					if (response.ok) {
						const data = await response.json();
						setStore({
							buyer: {
								...store.buyer,
								stores: [...data.stores]
							}
						});
					}
				} catch (error) {
					console.log(error);
				}
			},
			getSpecificStore: async seller_id => {
				try {
					const actions = getActions();
					const store = getStore();
					//Get a Store by id
					const response = await fetch(`${API_URI}/${seller_id}/store`);
					if (response.ok) {
						const data = await response.json();
						setStore({
							seller: {
								...store.seller,
								storeData: {
									...store.seller.storeData,
									info: {
										...data.store
									}
								}
							}
						});
					} else {
						throw new Error("Ocurrio un error haciendo el fetch");
					}
				} catch (error) {
					console.log(error);
				}
			},
			getProducts: store_id => {
				fetch(`${API_URI}/stores/${store_id}/products`)
					.then(response => {
						if (response.ok) {
							return response.json();
						}
					})
					.then(data => {
						const store = getStore();
						setStore({
							seller: {
								...store.seller,
								storeData: {
									...store.seller.storeData,
									products: [...data.products]
								}
							}
						});
					});
			},
			createProduct: async ({
				name,
				description,
				price,
				amountAvailable,
				imgUrl,
				categoryId,
				activateProduct,
				storeId
			}) => {
				const store = getStore();
				const actions = getActions();
				try {
					const newProduct = {
						name: name,
						description: description,
						price: price,
						amount_available: amountAvailable,
						active: activateProduct,
						img_url: imgUrl,
						category_id: categoryId
					};
					const create = await fetch(`${API_URI}/stores/${storeId}/new-product`, {
						method: "POST",
						body: JSON.stringify(newProduct),
						headers: {
							"Content-Type": "application/json"
						}
					});

					if (create.ok) {
						const updateProducts = await actions.getProducts(store.seller.storeData.info.id);
						return true;
					} else {
						throw new Error("Error, can't create the product.");
					}
				} catch (error) {
					return false;
				}
			},
			getCategories: () => {
				fetch(`${API_URI}/categories`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (response.ok) {
							return response.json();
						}
					})
					.then(data => {
						const store = getStore();

						setStore({
							categories: [...data.categories]
						});
					});
			},
			getShoppingCar: async buyerId => {
				try {
					const store = getStore();
					const actions = getActions();
					const response = await fetch(`${API_URI}/${buyerId}/products-to-buy`, {
						method: "GET",
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (response.ok) {
						const data = await response.json();
						console.log(data);
						setStore({
							buyer: {
								...store.buyer,
								shoppingCar: [...data.products_to_buy]
							}
						});
					} else {
						throw new Error("Ocurrió un error al obtener el carrito");
					}
				} catch (error) {
					console.log(error);
				}
			},
			updateProductToBuy: async (productId, newQuantity) => {
				try {
					const actions = getActions();
					const store = getStore();
					const quantity = { quantity: `${newQuantity}` };

					console.log(quantity);
					const update = await fetch(`${API_URI}/edit-product-to-buy/${productId}`, {
						method: "PATCH",
						body: JSON.stringify(quantity),
						headers: {
							"Content-Type": "application/json"
						}
					});

					if (update.ok) {
						const car = await actions.getShoppingCar(store.user.info.user_buyer.id);
						return true;
					}
				} catch (error) {
					console.log(error);
				}
			},
			deleteProductToBuy: async productId => {
				const store = getStore();
				const actions = getActions();

				try {
					const toDelete = await fetch(`${API_URI}/product-to-delete/${productId}`, {
						method: "DELETE"
					});

					if (toDelete.ok) {
						const car = await actions.getShoppingCar(store.user.info.user_buyer.id);
						return true;
					}
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
