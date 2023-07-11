import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBooksStore } from "../store/bookStore";
function Book() {
	const fetchActiveBook = useBooksStore((state) => state.fetchActiveBook);
	const activeBook = useBooksStore((state) => state.activeBook);

	const param = useParams();
	let resparam = Object.values(param)[0];
	useEffect(() => {
		fetchActiveBook(resparam);
	}, [resparam]);

	return (
		<div className="container mx-auto">
			<div className="flex space-x-60 h-2/4">
				<div className="w-1/3 h-2/4">
					<img
						src={`../../public/${activeBook?.img_url}`}
						alt="img_book"
						className="h-full w-full"
					/>
				</div>
				<div className="border w-2/4 p-6">
					<div>{activeBook?.title}</div>
					<div>{activeBook?.author}</div>
					<div>{activeBook?.language}</div>
					<div>{activeBook?.price}</div>
				</div>
			</div>
		</div>
	);
}

export default Book;
