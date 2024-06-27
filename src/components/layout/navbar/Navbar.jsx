import { NewPost } from "../../newPost/NewPost";

import { Button, HStack } from "@chakra-ui/react";

export const Navbar = ({ setLoggedIn, userNameLogin }) => {
	return (
		<>
			<HStack
				as="nav"
				maxW="640px"
				margin="auto"
				justifyContent="space-between"
				paddingBlock="15px"
			>
				<p>Bienvenida,{userNameLogin}Paula!</p>
				<NewPost />

				<Button
					colorScheme="pink"
					variant="ghost"
					color="#bbb9b9"
					onClick={() => {
						setLoggedIn(false);
					}}
				>
					Cerrar Sesión
				</Button>
			</HStack>
		</>
	);
};
