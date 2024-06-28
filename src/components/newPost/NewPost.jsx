import { useState } from "react";

import { useDisclosure } from "@chakra-ui/react";

import {
	Box,
	Button,
	FormControl,
	FormLabel,
	FormErrorMessage,
	HStack,
	Input,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	Textarea,
} from "@chakra-ui/react";

import { CgAddR } from "react-icons/cg";

export const NewPost = ({ userName, imgUser, postsArray, setPostsArray }) => {
	const [input, setInput] = useState("");

	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleInputChange = (e) => setInput(e.target.value);

	const isError = input === "";

	const handleSubmitNewPosts = (e) => {
		e.preventDefault();

		const newPost = {
			userName: userName,
			imgUser: imgUser,
			imgPost: e.target.imgPost.value,
			textPost: e.target.descriptionPost.value,
			hasNoText: false,
		};

		const postsNewArray = [...postsArray, newPost];
		setPostsArray(postsNewArray);
		onClose();
	};

	return (
		<div>
			<Button
				variant="solid"
				bg="#efa4b1"
				color="white"
				_hover={{ bg: "#d2009a" }}
				py="15px"
				onClick={onOpen}
				leftIcon={<CgAddR fontSize="24px" />}
			>
				Nuevo Post
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader color="#efa4b1" textDecoration="underline">
						Nuevo Post
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Box as="form" onSubmit={handleSubmitNewPosts}>
							<FormControl isInvalid={isError}>
								<FormLabel>Imagen</FormLabel>
								<Input
									type="text"
									onChange={handleInputChange}
									name="imgPost"
								/>
								<FormErrorMessage>La imagen es obligatoria</FormErrorMessage>
							</FormControl>
							<FormControl mt="20px">
								<FormLabel>Descripción</FormLabel>
								<Textarea name="descriptionPost" />
							</FormControl>
							<HStack my="20px" justifyContent="end">
								<Button
									mr={3}
									variant="outline"
									borderColor="#efa4b1"
									color="#efa4b1"
									_hover={{ borderColor: "#d2009a", color: "#d2009a" }}
									onClick={onClose}
								>
									Cerrar
								</Button>
								<Button
									variant="solid"
									bg="#efa4b1"
									color="white"
									_hover={{ bg: "#d2009a" }}
									type="submit"
								>
									Subir Post
								</Button>
							</HStack>
						</Box>
					</ModalBody>
				</ModalContent>
			</Modal>
		</div>
	);
};
