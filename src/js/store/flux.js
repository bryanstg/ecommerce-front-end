const getState = ({ getStore, getActions, setStore }) => {
	const API_URI = "http://127.0.0.1:3000";
	return {
		store: {
			seller: {
				user: {},
				categories: [],
				storeData: {
					info: {},
					products: []
				}
			}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
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
			getStore: store_id => {
				//Get a Store by id
				fetch(`${API_URI}/stores/${store_id}`)
					.then(response => {
						if (response.ok) {
							return response.json();
						}
					})
					.then(data => {
						const store = getStore();
						const actions = getActions();
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
					});
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
				activateProduct
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
					const create = await fetch(`${API_URI}/stores/${store.seller.storeData.info.id}/new-product`, {
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
				fetch(`${API_URI}/categories`)
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
								categories: [...data.categories]
							}
						});
					});
			}
		}
	};
};

export default getState;
