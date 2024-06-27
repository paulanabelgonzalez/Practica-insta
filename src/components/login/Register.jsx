import { useState } from "react";

import { ViewPassword } from "./ViewPassword";

export const Register = ({ setLoggedIn, setIsRegister }) => {
	const [userNameRegister, setUserNameRegister] = useState("");
	const [email, setEmail] = useState("");
	const [passwordRegister, setPasswordRegister] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	const [typePassword, setTypePassword] = useState("password");
	const [isValid, setIsValid] = useState(false);

	const handleRegisterSubmit = (e) => {
		e.preventDefault();

		if (passwordRegister === repeatPassword) {
			setIsValid(true);
		} else {
			alert("Las contraseñas no coinciden");
		}

		if (userNameRegister !== "" && email !== "" && passwordRegister !== "") {
			setIsValid(true);
		} else {
			alert("Por favor complete todos los campos");
		}

		if (
			passwordRegister === repeatPassword &&
			userNameRegister !== "" &&
			email !== "" &&
			passwordRegister !== ""
		) {
			alert("Se ha registrado exitosamente");
			setLoggedIn(true);
			setIsRegister(true);
		}
	};

	return (
		<div className="min-h-3.5 my-auto mt-[10%]">
			<h2 className="text-2xl text-center mb-8">Regístrate</h2>
			<form
				onSubmit={handleRegisterSubmit}
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
						value={userNameRegister}
						onChange={(e) => setUserNameRegister(e.target.value)}
					/>
				</div>
				<div className="mb-5 relative">
					<label htmlFor="email" className="block mb-[10px]">
						Email
					</label>
					<input
						type="email"
						placeholder="MariaAntonieta@gmail.com"
						className="w-full border border-black rounded-md px-1 py-2"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mb-5 relative">
					<label htmlFor="password" className="block mb-[10px]">
						Contraseña
					</label>
					<input
						type={typePassword}
						className="w-full border border-black rounded-md px-1 py-2"
						value={passwordRegister}
						onChange={(e) => setPasswordRegister(e.target.value)}
					/>
					<ViewPassword
						typePassword={typePassword}
						setTypePassword={setTypePassword}
					/>
				</div>
				<div className="mb-5 relative">
					<label htmlFor="password" className="block mb-[10px]">
						Repita Contraseña
					</label>
					<input
						type={repeatPassword}
						className="w-full border border-black rounded-md px-1 py-2"
						value={repeatPassword}
						onChange={(e) => setRepeatPassword(e.target.value)}
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
				Ya tienes cuenta?{" "}
				<span
					className="text-[#1d1dcd] cursor-pointer underline"
					onClick={() => setIsRegister(true)}
				>
					Inicia sesión
				</span>
				.
			</p>
		</div>
	);
};
