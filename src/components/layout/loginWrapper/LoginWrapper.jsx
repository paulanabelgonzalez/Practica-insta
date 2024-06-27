import { useState } from "react";

import { Carrousel } from "../../carrousel/Carrousel";
import { ContainerPost } from "../containerPost/ContainerPost";
import { Login } from "../../login/Login";
import { Navbar } from "../navbar/Navbar";
// import { Post } from "../../post/Post";
import { Register } from "../../login/Register";
import { SlideInfinit } from "../../slideInfinit/SlideInfinit";

export const LoginWrapper = ({ userNameLogin }) => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [isRegister, setIsRegister] = useState(true);

	// console.log(userNameLogin);
	if (loggedIn) {
		return (
			<>
				<Navbar userNameLogin={userNameLogin} setLoggedIn={setLoggedIn} />

				<Carrousel />

				<SlideInfinit />

				<ContainerPost />
			</>
		);
	} else {
		return (
			<>
				{isRegister ? (
					<Login setLoggedIn={setLoggedIn} setIsRegister={setIsRegister} />
				) : (
					<Register setLoggedIn={setLoggedIn} setIsRegister={setIsRegister} />
				)}
			</>
		);
	}
};
