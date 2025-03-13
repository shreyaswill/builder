import { useState } from "react";

interface SideBarProps {
        setWidth: (value: string) => void;
        setHeight: (value: string) => void;
        setPadding: (value: string) => void;
        setBgColor: (value: string) => void;
        addDiv: () => void;
    }
    
    export const SideBar: React.FC<SideBarProps> = ({ setWidth, setHeight, setPadding, setBgColor, addDiv }) => {
        const [collapsed, setCollapsed] = useState<boolean>(false);
    
        return (
            <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
                <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
                    {collapsed ? "☰" : "✖"}
                </button>
    
                {!collapsed && (
                    <div className="controls">
                        <label>Width: <input type="text" onChange={(e) => setWidth(e.target.value)} /></label>
                        <label>Height: <input type="text" onChange={(e) => setHeight(e.target.value)} /></label>
                        <label>Padding: <input type="text" onChange={(e) => setPadding(e.target.value)} /></label>
                        <label>Background Color: <input type="color" onChange={(e) => setBgColor(e.target.value)} /></label>
                        <button className="add-div-btn" onClick={addDiv}>Add Div</button>
                    </div>
                )}
            </div>
        );
    };
    