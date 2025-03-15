import "./App.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Login } from "./pages/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { persistor, store } from "./redux";
import { Home } from "./pages/Home/Home";

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <div className="app-container">
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="*" element={<Home />} />
                        </Routes>
                    </div>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
