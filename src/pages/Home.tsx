import { Canvas } from "../components/Canvas/Canvas";
import { SideBar } from "../components/Sidebar/Sidebar";
import "./Home.css";

export const Home: React.FC = () => {
    return (
        <div className="container">
            <SideBar />
            <Canvas />
        </div>
    );
};
