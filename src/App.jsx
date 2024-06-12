import { LoginWrapper } from "./components/layout/loginWrapper/LoginWrapper";

function App() {
	const loggedIn = true;
	return (
		<>
			<LoginWrapper loggedIn={loggedIn} />
		</>
	);
}

export default App;
