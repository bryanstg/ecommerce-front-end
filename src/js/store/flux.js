const getState = ({ getStore, getActions, setStore }) => {
	const API_URI = "http://192.168.0.3:3000";
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			buyer: {
				user: {},
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
							buyer: {
								...store.buyer,
								storeData: {
									...store.buyer.storeData,
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
							buyer: {
								...store.buyer,
								storeData: {
									...store.buyer.storeData,
									products: [...data.products]
								}
							}
						});
					});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
