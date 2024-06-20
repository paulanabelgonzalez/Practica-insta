import { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = ({ setLoggedIn }) => {
	const [hamburguerMenu, setHamburguerMenu] = useState(false);

	return (
		<>
			<nav className="max-w-[640px] mx-auto my-14 flex flex-col items-end gap-4">
				<button>
					<RxHamburgerMenu
						className="w-8 h-8 "
						onClick={() => {
							setHamburguerMenu(!hamburguerMenu);
						}}
					/>
				</button>
				{hamburguerMenu ? (
					<button
						onClick={() => {
							setLoggedIn(false);
						}}
					>
						Cerrar Sesión
					</button>
				) : (
					""
				)}
			</nav>
		</>
	);
};
