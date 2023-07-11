import axios from "axios";
import { create } from "zustand";
import { BookType, URL } from "./bookStore";

type FavortieStoreType = {
	favorites: BookType[];
	fetchfavorite: () => void;
};

export const useFavoriteStore = create<FavortieStoreType>((set) => ({
	favorites: [],
	fetchfavorite: async () => {
		const result = await axios.get(`${URL}/favorites`);
		set({ favorites: result.data });
	},
}));
