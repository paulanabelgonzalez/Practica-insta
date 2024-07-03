import { imgValidations } from "../../utils/validations";

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

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { v4 as uuidv4 } from "uuid";
import { CgAddR } from "react-icons/cg";

export const NewPost = ({ userName, imgUser, postsArray, setPostsArray }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const {
		register,
		reset,
		formState: { errors },
		handleSubmit,
	} = useForm({ criteriaMode: "all" });
	// console.log(errors);

	const handleCloseReset = () => {
		onClose();
		reset();
	};

	const onSubmit = (data) => {
		// console.log(data);
		const newPost = {
			id: uuidv4(),
			userName: userName,
			imgUser: imgUser,
			imgPost: data.imgPost,
			textPost: data.textPost,
			hasNoText: false,
		};

		const postsNewArray = [...postsArray, newPost];
		setPostsArray(postsNewArray);
		handleCloseReset();
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

			<Modal isOpen={isOpen} onClose={handleCloseReset}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader color="#efa4b1" textDecoration="underline">
						Nuevo Post
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Box as="form" onSubmit={handleSubmit(onSubmit)}>
							<FormControl isInvalid={errors.imgPost ? true : false}>
								<FormLabel>Imagen</FormLabel>
								<Input
									type="text"
									name="imgPost"
									{...register("imgPost", imgValidations)}
								/>
								<ErrorMessage
									errors={errors}
									name="imgPost"
									render={({ messages }) =>
										messages &&
										Object.entries(messages).map(([type, message]) => (
											<FormErrorMessage key={type}>{message}</FormErrorMessage>
										))
									}
								/>
							</FormControl>
							<FormControl mt="20px">
								<FormLabel>Descripción</FormLabel>
								<Textarea {...register("textPost", { required: true })} />
							</FormControl>
							<HStack my="20px" justifyContent="end">
								<Button
									mr={3}
									variant="outline"
									borderColor="#efa4b1"
									color="#efa4b1"
									_hover={{ borderColor: "#d2009a", color: "#d2009a" }}
									onClick={handleCloseReset}
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
