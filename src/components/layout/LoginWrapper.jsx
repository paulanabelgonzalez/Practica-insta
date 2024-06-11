export const LoginWrapper = ({ loggedIn }) => {
	if (loggedIn) {
		return console.log("estoy logeado");
	} else {
		return (
			<form>
				<label htmlFor="userName">Nombre Usuario</label>
				<input type="text" />
				<label htmlFor="password">Contraseña</label>
				<input type="password" />
				<button>Iniciar Sesión</button>
			</form>
		);
	}
};
