import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginCard from "./components/LoginCard/LoginCard";
import SignUpCard from "./components/SignupCard/SignupCard";
import Welcome from "./pages/Welcome";
import Dashboard from "./components/Dashboard/Dashboard";
import "./assets/App.css";

const AuthContext = createContext(null);

function App() {
	const [user, setUser] = useState();
	const [isUser, setIsUser] = useState(false);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			<BrowserRouter>
						<Routes>
							<Route
								path="/dashboard"
								element={user ? <Welcome /> : <Dashboard />}
							/>
							<Route path="/login" element={<LoginCard />} />
							<Route path="/signup" element={<SignUpCard />} />
							<Route exact path="/" element={<Welcome />} />
						</Routes>
			</BrowserRouter>
		</AuthContext.Provider>
	);
}

export default App;
