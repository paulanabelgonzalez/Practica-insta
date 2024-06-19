import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { User } from "../user/User";

import gaby from "../../assets/gaby.jpeg";

export const Carrousel = () => {
	return (
		<Splide
			aria-label="My Carrousel"
			className="flex max-w-[640px] mx-auto  gap-5 mt-3"
			options={{
				perPage: 4,
				gap: "1rem",
				// gap: "0.5rem",
				// perPage: 3,
				// arrows: false
				perMove: 1,
				pagination: false,
				// mediaQuery: "min",
				breackpoints: {
					640: {
						gap: "0.5rem",
						perPage: 3,
						arrows: false,
					},
				},
			}}
		>
			<SplideSlide>
				<User
					imgUser="https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					userName="Naomi"
				/>
			</SplideSlide>

			<SplideSlide>
				<User
					imgUser="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600"
					userName="Ever"
				/>
			</SplideSlide>

			<SplideSlide>
				<User
					imgUser="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=600"
					userName="Anabel"
				/>
			</SplideSlide>

			<SplideSlide>
				<User imgUser={gaby} userName="Gaby" />
			</SplideSlide>

			<SplideSlide>
				<User
					imgUser="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT8bo5e7Fy-iLBFWdoP3i9DIi07Wx-NIznOArITN6DtiwYFTG86"
					userName="Cintia"
				/>
			</SplideSlide>

			<SplideSlide>
				<User
					imgUser="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0mpdf1Ci-G_q7RZWcV1uAecT8Bo_C4jDwQ&s"
					userName="Nanu"
				/>
			</SplideSlide>

			<SplideSlide>
				<User
					imgUser="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTaHk-N1n5O6yxv7H56M1MHSr82B6Lj39GA&s"
					userName="Paula"
				/>
			</SplideSlide>

			<SplideSlide>
				<User
					imgUser="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBprKzsoTxRiEQYZKf-yW6pGhEyZ0csP-D0w&s"
					userName="Adonis"
				/>
			</SplideSlide>

			<SplideSlide>
				<User
					imgUser="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJWEUy4uGmjTWRn6idexs7bARowu13a-0ZRA&s"
					userName="Gabriel"
				/>
			</SplideSlide>

			<SplideSlide>
				<User
					imgUser="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ntIZXKiPjWN3PMQq56mBla0cK6MuerwRdQ&s"
					userName="Gastón"
				/>
			</SplideSlide>
		</Splide>
	);
};
