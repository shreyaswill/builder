import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";

export const Login: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
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

        if (!username || !password) {
            setError("Both fields are required.");
            return;
        }

        setError("");
        localStorage.setItem("username", username);
        navigate("/home");
    };

    return (
        <div className="background-container">
            {/* Video background */}
            <video autoPlay loop muted className="background-video">
                <source src="./Div.mp4" type="video/mp4" />
            </video>
            <div className="login-container">
                <div className="login-card">
                    <img src="/logo1.png" alt="Logo" className="logo" />
                    <form onSubmit={isRegistering ? handleRegister : handleLogin} className="login-form">
                        <h2 className="login-title">{isRegistering ? "Register Now" : "Welcome! Please log in to continue."}</h2>
                        {error && <p className="error-message">{error}</p>}
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <div className="password-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span 
                                className="password-toggle" 
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <button type="submit">{isRegistering ? "Register" : "Sign In"}</button>
                    </form>
                    <div className="toggle-auth">
                        <button
                            className="register-button"
                            onClick={() => {
                                setIsRegistering(!isRegistering);
                                setUsername(""); 
                                setPassword("");
                                setError("");
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
