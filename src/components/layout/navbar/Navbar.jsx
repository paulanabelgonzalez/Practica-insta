import { NewPost } from "../../newPost/NewPost";

import { Button, HStack } from "@chakra-ui/react";

export const Navbar = ({
	setLoggedIn,
	userName,
	imgUser,
	postsArray,
	setPostsArray,
}) => {
	return (
		<>
			<HStack
				as="nav"
				maxW="640px"
				margin="auto"
				justifyContent="space-between"
				paddingBlock="15px"
			>
				<p>Bienvenida, {userName}!</p>

				<NewPost
					userName={userName}
					imgUser={imgUser}
					postsArray={postsArray}
					setPostsArray={setPostsArray}
				/>

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
