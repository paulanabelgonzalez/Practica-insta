import { User } from "../../user/User";

import gaby from "../../../assets/gaby.jpeg";

export const Stories = () => {
	const historySeen = true;
	return (
		<div className="flex justify-center gap-5 mt-3">
			<User
				imgUser="https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				userName="Naomi"
				historySeen={historySeen}
			/>
			<User
				imgUser="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600"
				userName="Ever"
			/>
			<User
				imgUser="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=600"
				userName="Anabel"
				historySeen={historySeen}
			/>
			<User imgUser={gaby} userName="Gaby" />
			<User
				imgUser="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT8bo5e7Fy-iLBFWdoP3i9DIi07Wx-NIznOArITN6DtiwYFTG86"
				userName="Cintia"
			/>
			<User
				imgUser="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0mpdf1Ci-G_q7RZWcV1uAecT8Bo_C4jDwQ&s"
				userName="Nanu"
			/>
			<User
				imgUser="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTaHk-N1n5O6yxv7H56M1MHSr82B6Lj39GA&s"
				userName="Paula"
			/>
			<User
				imgUser="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBprKzsoTxRiEQYZKf-yW6pGhEyZ0csP-D0w&s"
				userName="Adonis"
			/>
			<User
				imgUser="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJWEUy4uGmjTWRn6idexs7bARowu13a-0ZRA&s"
				userName="Gabriel"
			/>
			<User
				imgUser="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ntIZXKiPjWN3PMQq56mBla0cK6MuerwRdQ&s"
				userName="Gastón"
			/>
		</div>
	);
};
