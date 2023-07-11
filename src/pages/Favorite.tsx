import { useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "../components/Item/Item";
import { useFavoriteStore } from "../store/favoriteStore";
function Favorite() {
	const favorites = useFavoriteStore((state) => state.favorites);

	console.log(favorites);
	return (
		<div className="container mx-auto">
			<div className="grid grid-cols-5 gap-5 gap-y-11">
				{favorites.map((elem, index) => (
					<Link key={index} to={`/favorite/${elem.id}`}>
						<Item elem={elem} />
					</Link>
				))}
			</div>
		</div>
	);
}

export default Favorite;
