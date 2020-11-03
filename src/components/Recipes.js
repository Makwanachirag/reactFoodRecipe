import React from "react";

function Recipes(props) {
	const { recipes } = props;
	return (
		<>
			<div className="card-columns">
				{recipes.map((recipe, inddex) => (
					<div className="">
						<div className="card">
							<img
								className="card-img-top img-fluid"
								src={recipe.recipe.image}
								alt={recipe.recipe.label}
							></img>
							<div className="card-body">
								<a href={recipe.recipe.url}>
									<h5 className="card-title">{recipe.recipe.label}</h5>
								</a>
								<p>
									Calories : {Math.round(recipe.recipe.calories).toFixed(2)}
								</p>
								<p>
									Total Weight :
									{Math.round(recipe.recipe.totalWeight).toFixed(2)}
								</p>
								<h4>ingredients</h4>
								<ul>
									{recipe.recipe.ingredientLines.map((ingredient) => (
										<li>{ingredient}</li>
									))}
								</ul>
							</div>
						</div>
						<br />
					</div>
				))}
			</div>
		</>
	);
}

export default Recipes;
