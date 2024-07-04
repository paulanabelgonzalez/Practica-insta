import { useState } from "react";

import { ViewPassword } from "./ViewPassword";

import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ModalValidations } from "./ModalValidations";

export const Login = ({
	setLoggedIn,
	setIsRegister,
	isOpen,
	onOpen,
	onClose,
	validations,
	setValidations,
}) => {
	const [typePassword, setTypePassword] = useState("password");

	const { register, handleSubmit } = useForm();
	// console.log(errors);
	const usuario = {
		nombre: "Paula",
		contraseña: "123",
	};

	const onSubmit = (data) => {
		// console.log(data);

		const datos = {
			name: data.name,
			password: data.password,
		};

		if (
			usuario.nombre === datos.name &&
			usuario.contraseña === datos.password
		) {
			setLoggedIn(true);
		}
		if (usuario.nombre != datos.name || usuario.contraseña != datos.password) {
			onOpen();
			setValidations(0);
		}

		if (datos.name === "" || datos.password === "") {
			onOpen();
			setValidations(1);
		}
	};
	return (
		<Box mt="14%">
			<ModalValidations
				isOpen={isOpen}
				onClose={onClose}
				validations={validations}
			/>

			<h2 className="text-2xl text-center mb-8">Iniciar Sesión</h2>

			<Box
				as="form"
				border="1px"
				borderColor="black"
				borderRadius="1rem"
				p="1.25rem"
				maxW="300px"
				mx="auto"
				mb="2rem"
				onSubmit={handleSubmit(onSubmit)}
			>
				<FormControl mb={5} position="relative">
					<FormLabel display="block" mb="10px">
						Nombre Usuario
					</FormLabel>
					<Input
						type="text"
						placeholder="Maria Antonieta"
						w="full"
						border="1px"
						borderColor="black"
						borderRadius="md"
						px={2}
						py={2}
						{...register("name")}
					/>
				</FormControl>

				<FormControl mb={5} position="relative">
					<FormLabel display="block" mb="10px">
						Contraseña
					</FormLabel>
					<Input
						type={typePassword}
						className="w-full border border-black rounded-md px-1 py-2"
						w="full"
						border="1px"
						borderColor="black"
						borderRadius="md"
						px={2}
						py={2}
						{...register("password")}
					/>
					<ViewPassword
						typePassword={typePassword}
						setTypePassword={setTypePassword}
					/>
				</FormControl>

				<Button
					px={3}
					py={2}
					fontWeight="normal"
					backgroundColor="#e5e7eb"
					_hover={{ backgroundColor: "#f0f1f3" }}
					borderRadius="5px"
					display="block"
					mx="auto"
					cursor="pointer"
					type="submit"
				>
					Iniciar Sesión
				</Button>
			</Box>

			<p className="text-center">
				No tienes cuenta?{" "}
				<Box
					as="span"
					color="#1d1dcd"
					cursor="pointer"
					textDecoration="underline"
					onClick={() => setIsRegister(false)}
				>
					Regístrate
				</Box>
				.
			</p>
		</Box>
	);
};
