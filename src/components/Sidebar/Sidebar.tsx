import { useState } from "react";
import "./Sidebar.css";

export const SideBar: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return (
        <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
          <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? "☰" : "✖"}
          </button>
        </div>
    );
}
