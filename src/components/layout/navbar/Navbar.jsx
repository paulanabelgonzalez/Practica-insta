import { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = ({ setLoggedIn }) => {
	const [hamburguerMenu, setHamburguerMenu] = useState(false);

	return (
		<>
			<nav className="bg-[pink] p-2 max-w-[640px] mx-auto mb-6 flex justify-between items-start gap-4">
				<p>Bienvenida, Paula!</p>
				<div className="flex flex-col items-end gap-2">
					<button>
						<RxHamburgerMenu
							className="w-8 h-8"
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
				</div>
			</nav>
		</>
	);
};
