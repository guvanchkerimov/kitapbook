import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function Home() {
	return (
		<div className="container mx-auto">
			<Swiper>
				<SwiperSlide className="h-96 bg-yellow-500">1</SwiperSlide>
				<SwiperSlide className="h-96 bg-red-500">2</SwiperSlide>
				<SwiperSlide className="h-96 bg-sky-500">3</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default Home;
