import React, { useEffect } from "react";
import { BookType, useBooksStore } from "../../store/bookStore";
import { useFavoriteStore } from "../../store/favoriteStore";
import { useCardStore } from "../../store/cardStore";
type IPros = {
	elem: BookType;
};
function Item({ elem }: IPros) {
	const favorites = useFavoriteStore((state) => state.favorites);
	const fetchPostCard = useCardStore((state) => state.fetchPostCard);
	const handleAddToCard = (
		e: React.MouseEvent<HTMLButtonElement>,
		elem: BookType
	) => {
		e.stopPropagation();
		e.preventDefault();
		fetchPostCard(elem);
	};

	return (
		<div className="w-full h-full shadow relative">
			<div className="h-3/4 ">
				<img className="h-full w-full" src={`${elem.img_url}`} alt="" />
			</div>
			<div className="px-3 h-1/4 flex flex-col justify-between pb-3">
				<div className="text-center h-full flex flex-col justify-between">
					<div className="flex-1">{elem.title}</div>
					<div className="text-gray-700 font-bold text-lg ">
						{elem.price} Tmt
					</div>
				</div>
				<button
					onClick={(e) => handleAddToCard(e, elem)}
					className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
					Sebede gosh
				</button>
			</div>

			<div className="absolute top-5 right-3 h-6 w-6">
				<svg
					className={`h-full w-full text-gray-300`}
					fill="none"
					strokeWidth={2}
					stroke="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
					/>
				</svg>
			</div>
		</div>
	);
}

export default Item;
