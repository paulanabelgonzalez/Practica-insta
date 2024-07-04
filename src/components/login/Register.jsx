import { useState } from "react";

import { ViewPassword } from "./ViewPassword";
import { ModalValidations } from "./ModalValidations";

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

export const Register = ({
	setLoggedIn,
	setIsRegister,
	isOpen,
	onOpen,
	onClose,
	validations,
	setValidations,
}) => {
	const [typePassword, setTypePassword] = useState("password");

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		criteriaMode: "all",
	});

	// console.log(errors);

	const onSubmit = (data) => {
		console.log(data.nameRegister);

		// console.log(datos);

		if (data.password !== data.repeatPassword) {
			onOpen();
			setValidations(2);
		}
		if (
			data.nameRegister === "" ||
			data.email === "" ||
			data.age === "" ||
			data.password === ""
		) {
			onOpen();
			setValidations(1);
		}
		if (
			data.password === data.repeatPassword &&
			data.nameRegister !== "" &&
			data.email !== "" &&
			data.age !== "" &&
			data.password !== ""
		) {
			onOpen();
			setValidations(3);
		}
	};

	return (
		<Box minH={3.5} my="auto" mt="10%">
			<ModalValidations
				isOpen={isOpen}
				onClose={onClose}
				validations={validations}
				setIsRegister={setIsRegister}
				setLoggedIn={setLoggedIn}
			/>

			<h2 className="text-2xl text-center mb-8">Regístrate</h2>
			<Box
				as="form"
				border="1px"
				borderColor="black"
				borderRadius="2xl"
				p={5}
				maxW="500px"
				mx="auto"
				mb={8}
				onSubmit={handleSubmit(onSubmit)}
			>
				<FormControl mb={5} position="relative">
					<FormLabel display="block" mb="10px">
						Nombre Usuario
					</FormLabel>
					<Input
						w="full"
						border="1px"
						borderColor="black"
						borderRadius="md"
						px={2}
						py={2}
						type="text"
						placeholder="Maria Antonieta"
						{...register("nameRegister")}
					/>
				</FormControl>

				<FormControl
					mb={5}
					position="relative"
					isInvalid={errors.email ? true : false}
				>
					<FormLabel display="block" mb="10px">
						Email
					</FormLabel>
					<Input
						w="full"
						border="1px"
						borderColor="black"
						borderRadius="md"
						px={2}
						py={2}
						type="text"
						placeholder="MariaAntonieta@gmail.com"
						{...register("email", {
							minLength: {
								value: 10,
								message: "La dirección del mail es muy corta.",
							},
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
								message: "El mail no es correcto",
							},
						})}
					/>
					<ErrorMessage
						errors={errors}
						name="email"
						render={({ messages }) =>
							messages &&
							Object.entries(messages).map(([type, message]) => (
								<p style={{ color: "red" }} key={type}>
									{message}
								</p>
							))
						}
					/>
				</FormControl>

				<FormControl mb={5} position="relative">
					<FormLabel display="block" mb="10px">
						Edad
					</FormLabel>
					<Input
						w="full"
						border="1px"
						borderColor="black"
						borderRadius="md"
						px={2}
						py={2}
						type="number"
						{...register("age", {
							maxLength: {
								value: 2,
								message: "El maximo de caracteres es de dos.",
							},
						})}
					/>
					<ErrorMessage
						errors={errors}
						name="age"
						render={({ messages }) =>
							messages &&
							Object.entries(messages).map(([type, message]) => (
								<p style={{ color: "red" }} key={type}>
									{message}
								</p>
							))
						}
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
						w="full"
						border="1px"
						borderColor="black"
						borderRadius="md"
						px={2}
						py={2}
						type={typePassword}
						placeholder="Debe tener al menos una mayuscula y un número."
						{...register("password", {
							minLength: {
								value: 3,
								message: "El mínimo de caracteres es de tres.",
							},
							maxLength: {
								value: 10,
								message: "El maximo de caracteres es de diez.",
							},
							pattern: {
								value: /^(?=.*[A-Z])(?=.*[0-9]).{3,10}$/,
								message: "La contraseña no cumple con el requerimiento mínimo",
							},
						})}
					/>
					<ViewPassword
						typePassword={typePassword}
						setTypePassword={setTypePassword}
					/>
					<ErrorMessage
						errors={errors}
						name="password"
						render={({ messages }) =>
							messages &&
							Object.entries(messages).map(([type, message]) => (
								<p style={{ color: "red" }} key={type}>
									{message}
								</p>
							))
						}
					/>
				</FormControl>

				<FormControl
					mb={5}
					position="relative"
					isInvalid={errors.repeatPassword ? true : false}
				>
					<FormLabel display="block" mb="10px">
						Repita Contraseña
					</FormLabel>
					<Input
						w="full"
						border="1px"
						borderColor="black"
						borderRadius="md"
						px={2}
						py={2}
						type={typePassword}
						{...register("repeatPassword", {
							minLength: {
								value: 3,
								message: "El mínimo de caracteres es de tres.",
							},
							maxLength: {
								value: 10,
								message: "El maximo de caracteres es de diez.",
							},
							pattern: {
								value: /^(?=.*[A-Z])(?=.*[0-9]).{3,10}$/,
								message: "La contraseña no cumple con el requerimiento mínimo",
							},
						})}
					/>
					<ViewPassword
						typePassword={typePassword}
						setTypePassword={setTypePassword}
					/>
					<ErrorMessage
						errors={errors}
						name="repeatPassword"
						render={({ messages }) =>
							messages &&
							Object.entries(messages).map(([type, message]) => (
								<p style={{ color: "red" }} key={type}>
									{message}
								</p>
							))
						}
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
					Registrarse
				</Button>
			</Box>
			<p className="text-center">
				Ya tienes cuenta?{" "}
				<Box
					as="span"
					color="#1d1dcd"
					cursor="pointer"
					textDecoration="underline"
					onClick={() => setIsRegister(true)}
				>
					Inicia sesión
				</Box>
				.
			</p>
		</Box>
	);
};
