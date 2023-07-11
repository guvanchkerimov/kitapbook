import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCardStore } from "../store/cardStore";
function Card() {
	const card = useCardStore((state) => state.card);
	const fetchCard = useCardStore((state) => state.fetchCard);
	useEffect(() => {
		fetchCard();
	}, []);
	// let summaPrice = card
	// 	.map((el) => el.price)
	// 	.reduce((acc, num) => acc + num, 0);

	return (
		<div className="container mx-auto">
			<div>
				<div className="flex justify-between items-center w-3/4 my-2">
					<div className="text-2xl">Sebedim</div>
					<button className="bg-red-400 p-2 rounded text-white hover:bg-red-500">
						Sebedi bosat
					</button>
				</div>
				<div className="flex justify-between space-x-4">
					<div className="w-3/4 ">
						{card?.map((elem) => (
							<Link to={`/card/${elem.id}`} key={elem.id}>
								<div className="w-full h-50 flex items-center border">
									<div className="w-1/5 h-42">
										<img
											className="w-full h-full"
											src={elem.img_url}
											alt="image-card"
										/>
									</div>
									<div className="flex-1">
										<p className="text-base">
											{elem.title}
										</p>
										<p className="text-gray-400">
											{elem.author}
										</p>
									</div>
									<div className="flex flex-col items-center space-y-2">
										<p className="text-xl font-medium">
											{elem.price} Tmt.
										</p>
										<div className="flex items-center space-x-2">
											<button className="bg-gray-300 p-2 px-4 rounded font-bold hover:bg-gray-400">
												+
											</button>
											<div>{elem.count}</div>
											<button className="bg-gray-300 p-2 px-4 rounded font-bold hover:bg-gray-400">
												-
											</button>
										</div>
										<div>sany</div>
									</div>
									<div className="mx-5">
										<button className="bg-red-400 text-white font-bold p-2 rounded hover:bg-red-500">
											x
										</button>
									</div>
								</div>
							</Link>
						))}
					</div>
					<div className="w-1/4 h-auto">
						<div className="border space-y-4 text-lg">
							<p className="border-b-2 text-xl p-2">Sebedim</p>
							<div className="flex space-x-2 border-b-2">
								<div>Bahasy:</div>
								<div className="font-medium">
									{/* {summaPrice} Tmt */}
								</div>
							</div>
							<div className="flex space-x-2 border-b-2">
								<div>Eltip bermek :</div>
								<div className="font-medium">0 Tmt</div>
							</div>
							<div className="border-b-2 flex space-x-2">
								<div>Jemi: </div>
								<div className="font-medium">
									{/* {summaPrice} Tmt */}
								</div>
							</div>
							<button className="bg-green-400  p-2 w-full rounded font-medium hover:bg-green -600">
								Sargydy tayyarlamak
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
