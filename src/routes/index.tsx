import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Home } from "../pages/Home/Home";
import { ProtectedRoute } from "./ProtectedRoute";

export const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="/home" element={<Home />} />
                    </Route>
                    <Route path="*" element={<Login />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
