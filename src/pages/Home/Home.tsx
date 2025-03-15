import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Canvas } from "../../components/Canvas/Canvas";
import { SideBar } from "../../components/Sidebar/Sidebar";
import "./Home.css";

export const Home: React.FC = () => {
    return (
        <div className="container">
            <DndProvider backend={HTML5Backend}>
                <SideBar /> 
                <Canvas />
            </DndProvider>
        </div>
    );
};
