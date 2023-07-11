import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="h-14 items-center flex">
			<div className="flex justify-between container mx-auto">
				<Link to={"/"}>Logo</Link>
				<div className="flex space-x-6">
					<div>lng</div>
					<div>ichine gir</div>
					<Link to={"/register"}>Register</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;
