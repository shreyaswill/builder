import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="app-container"> {/* Ensure this is wrapping all content */}
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
