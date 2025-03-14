import { useState } from "react";
import "./sidebar.css";
interface SideBarProps {
        setWidth: (value: string) => void;
        setHeight: (value: string) => void;
        setPadding: (value: string) => void;
        setBgColor: (value: string) => void;
        addDiv: () => void;
        deleteSelectedDiv: () => void;
    }
    
    export const SideBar: React.FC<SideBarProps> = ({ setWidth, setHeight, setPadding, setBgColor, addDiv, deleteSelectedDiv }) => {
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
                        <button className="delete-div-btn" onClick={deleteSelectedDiv}>Delete Selected</button>
                    </div>
                )}
            </div>
        );
    };
    