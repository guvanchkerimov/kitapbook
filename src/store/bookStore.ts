import axios from "axios";
import { create } from "zustand";
export const URL = "http://localhost:3004";
export type BookType = {
	id: number;
	title: string;
	author: string;
	img_url: string;
	description?: string;
	language?: string;
	category?: number;
	publish_year?: number;
	pages?: number;
	rent_price: number;
	on_rent?: boolean;
	price: number;
	owner_id?: number;
	count: number;
};

export type BookStoreType = {
	books: BookType[];
	activeBook: BookType | null;
	activePage: BookType[] | [];
	filterBookResult: BookType[];

	fetchBooks: () => void;
	fetchActiveBook: (paramId: any) => void;

	filterBooks: Function;
	fetchPagination: Function;
};

export const useBooksStore = create<BookStoreType>((set) => ({
	books: [],
	activeBook: null,
	activePage: [],
	filterBookResult: [],
	filterBooks: (value: string) =>
		set((state) => ({
			filterBookResult: state.books.filter((elem: BookType) =>
				elem.title.toLowerCase().includes(value.toLowerCase())
			),
		})),
	fetchBooks: async () => {
		const result = await axios.get(`${URL}/books`);
		set({ books: result.data });
	},
	fetchActiveBook: async (paramId: any) => {
		const result = await axios.get(`${URL}/books/${paramId}`);
		set({ activeBook: result.data });
	},
	fetchPagination: async (page: number = 1) => {
		const result = await axios.get(`${URL}/books?_limit=10&_page=${page}`);
		set({ activePage: result.data });
		console.log("fetch");
	},
}));
