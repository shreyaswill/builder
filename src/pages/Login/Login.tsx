import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css";

export const Login: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
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

    return (
        <div className="login-container">
            <div className="login-card">
                <img src="/logo.png" alt="Logo" className="logo" />
                <form onSubmit={handleLogin} className="login-form">
                    <h2>Login</h2>
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
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};
