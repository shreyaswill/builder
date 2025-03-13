import { Canvas } from "../components/canvas/canvas";
import {SideBar} from "../components/sidebar/sidebar";
import "./home.css"

export const Home: React.FC = () => {
    return (
        <div className="container">
            <SideBar/>
            <Canvas/>
        </div>
    );
};
