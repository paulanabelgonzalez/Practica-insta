import { useState } from "react";

import { ViewPassword } from "./ViewPassword";

import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export const Login = ({ setLoggedIn, setIsRegister }) => {
	const [typePassword, setTypePassword] = useState("password");

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
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
			alert("Los datos ingresados no coinciden con ningún usuario registrado.");
		}

		if (datos.name === "" || datos.password === "") {
			alert("Por favor complete todos los campos");
		}
	};
	return (
		<Box mt="14%">
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
				<FormControl
					mb={5}
					position="relative"
					isInvalid={errors.name ? true : false}
				>
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
						{...register("name", {
							required: "El nombre de usuario es obligatorio.",
						})}
					/>
					<ErrorMessage
						errors={errors}
						name="name"
						render={({ message }) => <p className="text-red-600">{message}</p>}
					/>
				</FormControl>

				<FormControl
					mb={5}
					position="relative"
					isInvalid={errors.password ? true : false}
				>
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
						{...register("password", {
							required: "La contraseña es obligatoria.",
						})}
					/>
					<ViewPassword
						typePassword={typePassword}
						setTypePassword={setTypePassword}
					/>
					<ErrorMessage
						errors={errors}
						name="password"
						render={({ message }) => <p className="text-red-600">{message}</p>}
					/>
				</FormControl>

				<input
					type="submit"
					value="Iniciar Sesión"
					className="border px-2 py-1 bg-gray-200 rounded block mx-auto cursor-pointer"
				/>
			</Box>

			<p className="text-center">
				No tienes cuenta?{" "}
				<Box
					as="span"
					className="text-[#1d1dcd] cursor-pointer underline"
					onClick={() => setIsRegister(false)}
				>
					Regístrate
				</Box>
				.
			</p>
		</Box>
	);
};
