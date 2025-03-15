import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { SideBar } from "../../components/Sidebar/Sidebar";
import { Canvas } from "../../components/Canvas/Canvas";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
            <DndProvider backend={HTML5Backend}>
                <SideBar /> 
                <Canvas />
            </DndProvider>
        </div>
    );
};
