import { useState } from "react";
import "./sidebar.css";

export default function SideBar() {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return (
        <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
          <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? "☰" : "✖"}
          </button>
        </div>
    );
}
