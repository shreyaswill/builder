import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css";

export const Login: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isRegistering, setIsRegistering] = useState(false); // New state to track registration
    const navigate = useNavigate(); // Initialize navigate function

    const validatePassword = (password: string) => {
        const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Mock validation
        if (!username || !password) {
            setError("Both fields are required.");
            return;
        }
        if (username !== "admin" || password !== "Admin123") {
            setError("Invalid username or password.");
            return;
        }

        // Password validation
        if (!validatePassword(password)) {
            setError("Password must be at least 8 characters long, contain one uppercase letter, one number, and no special characters.");
            return;
        }

        // If successful, save to localStorage and redirect to home page
        setError("");
        localStorage.setItem("username", username); // Save username in localStorage
        navigate("/home"); // Redirect to Home
    };

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();

        setError("");
        localStorage.setItem("username", username);
        navigate("/home"); // Redirect to Home
    };

    const backgroundStyle = {
        backgroundImage: "url('./wall.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", 
    };

    return (
        <div className="login-container" style={backgroundStyle}>
            <div className="login-card">
                <img src="/logo.png" alt="Logo" className="logo" />
                <form onSubmit={isRegistering ? handleRegister : handleLogin} className="login-form">
                    <h2>{isRegistering ? "Register" : "Login"}</h2> {/* Dynamic title */}
                    {error && <p className="error-message">{error}</p>}
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">{isRegistering ? "Register" : "Login"}</button>
                </form>
                <div className="toggle-auth">
                    <button
                        className="register-button"
                        onClick={() => setIsRegistering(!isRegistering)} 
                    >
                        {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
                    </button>
                </div>
            </div>
        </div>
    );
};
