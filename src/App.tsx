import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Book from "./pages/Book";
import Books from "./pages/Books";
import Card from "./pages/Card";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { useBooksStore } from "./store/bookStore";
import { useFavoriteStore } from "./store/favoriteStore";
import { useCardStore } from "./store/cardStore";
function App() {
	const fetchCard = useCardStore((state) => state.fetchCard);
	const fetchFavorties = useFavoriteStore((state) => state.fetchfavorite);
	const activebook = useBooksStore((state) => state.activeBook);
	useEffect(() => {
		fetchFavorties();
		// fetchCard();
	}, []);
	return (
		<BrowserRouter>
			<Header />
			<Menu />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="books" element={<Books />} />
				<Route path="register" element={<Register />} />
				<Route path="card" element={<Card />} />
				<Route path="favorite" element={<Favorite />} />
				<Route path={`books/:${activebook?.id}`} element={<Book />} />
				<Route
					path={`favorite/:${activebook?.id}`}
					element={<Book />}
				/>
				<Route path={`card/:${activebook?.id}`} element={<Book />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
