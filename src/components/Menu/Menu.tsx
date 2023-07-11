import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useBooksStore } from "../../store/bookStore";
function Menu() {
	const filterFn = useBooksStore((state) => state.filterBooks);
	const fetchPagination = useBooksStore((state) => state.fetchPagination);
	const [searchInput, setSearchInput] = useState("");
	function handleSearch() {
		filterFn(searchInput);
		setSearchInput("");
	}

	return (
		<div className="h-14 bg-gray-700 z-50">
			<div className="container mx-auto flex justify-between items-center h-full">
				<div className="flex space-x-6 text-white h-full items-center">
					<Link
						to={"/"}
						className="h-full px-2.5 hover:bg-gray-800 flex items-center">
						Bas sahypa
					</Link>
					<Link
						to={"/books"}
						className="h-full px-2.5 hover:bg-gray-800 flex items-center">
						Kitaplar
					</Link>
					<Link
						to={""}
						className="h-full px-2.5 hover:bg-gray-800 flex items-center">
						Category
					</Link>
				</div>
				<div className="flex items-center space-x-6">
					<Link to={"/card"}>
						<svg
							className="h-6 w-6 text-white"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
							/>
						</svg>
					</Link>
					<Link to={"/favorite"}>
						<svg
							className="h-6 w-6 text-white"
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
					</Link>
					<div>
						<input
							value={searchInput}
							onChange={(e) => setSearchInput(e.target.value)}
							className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
							placeholder="Gozleg"
						/>
						<button
							className="bg-gray-300 hover:bg-gray-400 text-dark font-bold py-2 px-4 rounded"
							onClick={() => handleSearch()}>
							Gozle
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Menu;
