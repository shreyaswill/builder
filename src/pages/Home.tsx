import { Canvas } from "../components/Canvas/Canvas";
import { SideBar } from "../components/Sidebar/Sidebar";
import "./home.css";

export const Home: React.FC = () => {
    return (
        <div className="container">
            <SideBar />
            <Canvas />
        </div>
    );
};
