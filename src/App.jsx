import { LoginWrapper } from "./components/layout/LoginWrapper";

function App() {
	const loggedIn = false;
	return (
		<>
			<LoginWrapper loggedIn={loggedIn} />
		</>
	);
}

export default App;
