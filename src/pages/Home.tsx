import { useState } from "react";
import { Canvas } from "../components/Canvas/Canvas";
import { SideBar } from "../components/Sidebar/Sidebar";
import "./home.css";

export const Home: React.FC = () => {
    const [width, setWidth] = useState<string>("100%");
    const [height, setHeight] = useState<string>("auto");
    const [padding, setPadding] = useState<string>("20px");
    const [bgColor, setBgColor] = useState<string>("#b19f9f");
    const [divs, setDivs] = useState<number[]>([]);

    const addDiv = () => {
        setDivs([...divs, divs.length + 1]); // Unique key based on array length
    };

    return (
        <div className="container">
            <SideBar setWidth={setWidth} setHeight={setHeight} setPadding={setPadding} setBgColor={setBgColor} addDiv={addDiv} />
            <Canvas width={width} height={height} padding={padding} bgColor={bgColor} divs={divs} />
        </div>
    );
};
