import { Post } from "../../post/Post";
import { Stories } from "../stories/Stories";

export const LoginWrapper = ({ loggedIn }) => {
	if (loggedIn) {
		return (
			<>
				<Stories />
				<Post
					userName="Ever"
					imgUser="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600"
					imgPost="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNzFSEvSrOfhmbLFMO-aDPxWbRxoSt9c6_w&s"
					textPost="El que estudia es porque duda de sus conocimientos."
				/>
			</>
		);
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
