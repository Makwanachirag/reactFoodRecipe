import MaterialIcon from "material-icons-react";
function Header(props) {
	const { search, onInputChange, onSerachClick } = props;
	return (
		<>
			<div className="jumbotron">
				<h1 className="display-2">
					<MaterialIcon icon="free_breakfast" size={70} color="#fff" />
					Food Recipe
				</h1>
				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="Find Your Favorite Recipe here.."
						onChange={onInputChange}
					/>
					<div className="input-group-append">
						<button className="btn btn-dark" onClick={onSerachClick}>
							Search
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
