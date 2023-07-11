import axios from "axios";
import { create } from "zustand";
import { BookType, URL } from "./bookStore";

export type CardStore = {
	card: BookType[] | [];
	fetchCard: () => void;
	fetchPostCard: (elem: BookType) => any;
};

export const useCardStore = create<CardStore>((set) => ({
	card: [],
	fetchCard: async () => {
		const result = await axios.get(`${URL}/card`);
		set({ card: result.data });
	},
	fetchPostCard: async (elem) => {
		const result = await axios.post(`${URL}/card`, {
			elem,
		});
		set({ card: result.data });
	},
}));
