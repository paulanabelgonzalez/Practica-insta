import { useState } from "react";

import { Carrousel } from "../../carrousel/Carrousel";
import { Login } from "../../login/Login";
import { Navbar } from "../navbar/Navbar";
import { Post } from "../../post/Post";
import { Register } from "../../login/Register";
import { SlideInfinit } from "../../slideInfinit/SlideInfinit";

import { posts } from "../../../utils/posts";

import { useDisclosure } from "@chakra-ui/react";

import profilePic from "../../../assets/perfil.jpg";

export const LoginWrapper = () => {
	const [loggedIn, setLoggedIn] = useState(true);
	const [isRegister, setIsRegister] = useState(true);
	const [postsArray, setPostsArray] = useState(posts);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [validations, setValidations] = useState();

	const usuario = {
		nombre: "Paula",
		avatar: profilePic,
	};

	if (loggedIn) {
		return (
			<>
				<Navbar
					userName={usuario.nombre}
					setLoggedIn={setLoggedIn}
					imgUser={usuario.avatar}
					postsArray={postsArray}
					setPostsArray={setPostsArray}
				/>

				<Carrousel />

				<SlideInfinit />

				<div>
					{postsArray.map(
						({ userName, imgUser, imgPost, textPost, hasNoText, id }) => {
							return (
								<Post
									key={id}
									userName={userName}
									imgUser={imgUser}
									imgPost={imgPost}
									textPost={textPost}
									hasNoText={hasNoText}
								/>
							);
						}
					)}
				</div>
			</>
		);
	} else {
		return (
			<>
				{isRegister ? (
					<Login
						setLoggedIn={setLoggedIn}
						setIsRegister={setIsRegister}
						isOpen={isOpen}
						onOpen={onOpen}
						onClose={onClose}
						validations={validations}
						setValidations={setValidations}
					/>
				) : (
					<Register
						setLoggedIn={setLoggedIn}
						setIsRegister={setIsRegister}
						isOpen={isOpen}
						onOpen={onOpen}
						onClose={onClose}
						validations={validations}
						setValidations={setValidations}
					/>
				)}
			</>
		);
	}
};
