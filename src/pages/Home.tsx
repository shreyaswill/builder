import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "../components/Canvas/Canvas";
import { SideBar } from "../components/Sidebar/Sidebar";
import "./Home.css";

export const Home: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to login if no username is found in localStorage
        if (!localStorage.getItem("username")) {
            navigate("/", { replace: true });
        }
    }, [navigate]);

    return (
        <div className="container">
            <SideBar /> 
            <Canvas />
        </div>
    );
};
