import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css";

export const Login: React.FC = () => {
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [error, setError] = useState("");
        const [isRegistering, setIsRegistering] = useState(false);
        const navigate = useNavigate();

        const validatePassword = (password: string) => {
                const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
                return regex.test(password);
        };

        const handleLogin = (e: React.FormEvent) => {
                e.preventDefault();

                if (!username || !password) {
                        setError("Both fields are required.");
                        return;
                }
                if (username !== "admin" || password !== "Admin123") {
                        setError("Invalid username or password.");
                        return;
                }

                if (!validatePassword(password)) {
                        setError("Password must be at least 8 characters long, contain one uppercase letter, one number, and no special characters.");
                        return;
                }

                setError("");
                localStorage.setItem("username", username);
                navigate("/home");
        };

        const handleRegister = (e: React.FormEvent) => {
                e.preventDefault();

                setError("");
                localStorage.setItem("username", username);
                navigate("/home");
        };

        return (
                <div className="background-container">
                        <div className="login-container">
                                <div className="login-card">
                                        <img src="/logo1.png" alt="Logo" className="logo" />
                                        <form onSubmit={isRegistering ? handleRegister : handleLogin} className="login-form">
                                                <h2>{isRegistering ? "Register Now" : "Hello There ! Are you ready to Login ? "}</h2>
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
                                                <button type="submit">{isRegistering ? "Register" : "Sign In"}</button>
                                        </form>
                                        <div className="toggle-auth">
                                                <button
                                                        className="register-button"
                                                        onClick={() => {
                                                                setIsRegistering(!isRegistering);
                                                                setUsername(""); 
                                                                setPassword("");
                                                        }}
                                                >
                                                        {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
                                                </button>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};