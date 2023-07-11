import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBooksStore } from "../../store/bookStore";
import Item from "../Item/Item";

function Products() {
	const books = useBooksStore((state) => state.books);
	const filterBookResult = useBooksStore((state) => state.filterBookResult);
	const activePage = useBooksStore((state) => state.activePage);
	const fetchBooks = useBooksStore((state) => state.fetchBooks);
	const fetchPagination = useBooksStore((state) => state.fetchPagination);
	useEffect(() => {
		fetchBooks();
		fetchPagination(1);
	}, []);
	const [activePgBtn, setActivePgBtn] = useState(1);
	const countPage = Number(Math.ceil(books.length / 10));
	let page = [];
	for (let i: number = 1; i <= countPage; i++) {
		page.push(i);
	}
	function handlepage(elem: number) {
		fetchPagination(elem);
		setActivePgBtn(elem);
		// window.scrollTo(0, 0);
	}
	return (
		<div className="container mx-auto">
			{filterBookResult.length ? (
				<div className="grid grid-cols-5 gap-5 gap-y-11">
					{filterBookResult.map((elem, index) => (
						<Link key={index} to={`/books/${elem.id}`}>
							<Item elem={elem} />
						</Link>
					))}
				</div>
			) : (
				<>
					<div className="grid grid-cols-5 gap-5 gap-y-11">
						{activePage.map((elem, index) => (
							<Link key={index} to={`/books/${elem.id}`}>
								<Item elem={elem} />
							</Link>
						))}
					</div>
					<div className="flex w-full justify-center my-6">
						{page.map((elem, index) => {
							return (
								<div key={index + 1} className="flex space-x-6">
									<div
										className={`w-full h-full border rounded-full font-bold p-6 cursor-pointer text-${
											elem == activePgBtn
												? "white"
												: "black"
										} bg-${
											elem == activePgBtn
												? "gray-700"
												: "gray-400"
										} hover:bg-gray-600`}
										onClick={() => handlepage(elem)}>
										{elem}
									</div>
								</div>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
}

export default Products;
