import { useState } from "react";

import { ViewPassword } from "./ViewPassword";

export const Login = ({ setLoggedIn, setIsRegister }) => {
	const [userNameLogin, setUserNameLogin] = useState("");
	const [password, setPassword] = useState("");
	const [typePassword, setTypePassword] = useState("password");

	// console.log(userNameLogin);

	const usuario = {
		nombre: "Paula",
		contraseña: "123",
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		const datos = {
			nombre: userNameLogin,
			contraseña: password,
		};

		if (
			usuario.nombre === datos.nombre &&
			usuario.contraseña === datos.contraseña
		) {
			setLoggedIn(true);
		}
		if (
			usuario.nombre != datos.nombre ||
			usuario.contraseña != datos.contraseña
		) {
			alert("Los datos ingresados no coinciden con ningún usuario registrado.");
		}

		if (datos.nombre === "" || datos.contraseña === "") {
			alert("Por favor complete todos los campos");
		}
	};
	return (
		<div className="mt-[14%]">
			<h2 className="text-2xl text-center mb-8">Iniciar Sesión</h2>
			<form
				onSubmit={handleFormSubmit}
				className="border border-black rounded-2xl p-5 max-w-[300px] mx-auto mb-8"
			>
				<div className="mb-5 relative">
					<label htmlFor="userName" className="block mb-[10px]">
						Nombre Usuario
					</label>
					<input
						type="text"
						placeholder="Maria Antonieta"
						className="w-full border border-black rounded-md px-1 py-2"
						value={userNameLogin}
						onChange={(e) => setUserNameLogin(e.target.value)}
					/>
				</div>
				<div className="mb-5 relative">
					<label htmlFor="password" className="block mb-[10px]">
						Contraseña
					</label>
					<input
						type={typePassword}
						className="w-full border border-black rounded-md px-1 py-2"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
					<ViewPassword
						typePassword={typePassword}
						setTypePassword={setTypePassword}
					/>
				</div>

				<input
					type="submit"
					value="Iniciar Sesión"
					className="border px-2 py-1 bg-gray-200 rounded block mx-auto cursor-pointer"
				/>
			</form>

			<p className="text-center">
				No tienes cuenta?{" "}
				<span
					className="text-[#1d1dcd] cursor-pointer underline"
					onClick={() => setIsRegister(false)}
				>
					Regístrate
				</span>
				.
			</p>
		</div>
	);
};
