import React, { useState, useEffect } from "react";
import "./components/Header";
import Header from "./components/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "./components/Recipes";
import "./App.css";
import Axios from "axios";
import Recipes from "./components/Recipes";

function App() {
	const [search, setSearch] = useState("apple");
	const [recipes, setRecipes] = useState([]);
	const APP_ID = "27fbe4a7";
	const APP_KEY = "8eec51f4a93bb50d4e23ca25f655d954";
	const onInputChange = (e) => {
		setSearch(e.target.value);
	};
	useEffect(async () => {
		getRecipes();
	}, []);

	const getRecipes = async () => {
		const result = await Axios.get(
			`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		setRecipes(result.data.hits);
		console.table(result.data.hits);
	};

	const onSerachClick = () => {
		getRecipes();
	};

	return (
		<div className="App">
			<Header
				search={search}
				onInputChange={onInputChange}
				onSerachClick={onSerachClick}
			/>
			<div className="container">
				<Recipes recipes={recipes} />
			</div>
		</div>
	);
}

export default App;
