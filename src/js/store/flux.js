const getState = ({ getStore, getActions, setStore }) => {
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
			favorites: [],
			characters: [],
			charactersDetails: [],
			planets: [],	
			planetsDetails: [],
			vehicles: [],
			vehiclesDetails: [],
		},
		actions: {
			loadCharacters: () =>{
				const store = getStore();

				fetch(`https://www.swapi.tech/api/people/`)
				.then(response => response.json())
				.then(data => setStore({characters: data.results}))
				.then(()=> console.log(store))
				.catch(err => console.error(err.message))
				console.log(store)
			},
			loadPlanets: () => {
				const store = getStore();

				fetch(`https://www.swapi.tech/api/planets/`)
				.then(response => response.json())
				.then(data => setStore({planets: data.results}))
				.then(()=> console.log(store))
				.catch(err => console.error(err.message))

				console.log(store);

			},
			loadVehicles: () => {
				const store = getStore();

				fetch(`https://www.swapi.tech/api/vehicles/`)
				.then(response => response.json())
				.then(data => setStore({vehicles: data.results}))
				.then(()=> console.log(store))
				.catch(err => console.error(err.message))

				console.log(store);
			},
			loadDetails: (url, type) => {
				const store = getStore();

				fetch(url)
				.then(response => response.json())
				.then(data => {
					if (type === "planet") {
						setStore({planetsDetails: [...store.planetsDetails, data.result]})
					} else if (type === "character") {
						setStore({charactersDetails: [...store.charactersDetails, data.result]})
					} else {
						setStore({vehiclesDetails: [...store.vehiclesDetails, data.result]})
					}
				})
				console.log(store)
			},
			addFavorite: (obj) => {
				const store = getStore()
				
			 	setStore({favorites: [...store.favorites, obj]})
			},
			removeFavorite: (e) => {
				const store = getStore();

				const newFavorites = store.favorites.filter((x)=>{
					return e.target.id !== x.id
				})

				setStore({favorites: newFavorites})
			},
			removeFavorite2: (str) => {
				const store = getStore();

				const newFavorites = store.favorites.filter((x)=>{
					return str != x.name
				})

				setStore({favorites: newFavorites})
			},
			addBtnStyle: (obj) => {
				const store = getStore();

				setStore({btnStyle: {...store.btnStyle, obj}})
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
