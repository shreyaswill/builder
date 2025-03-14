import { useNavigate } from "react-router-dom"; // Import useNavigate
import { DeleteElement } from "../DeleteElement/DeleteElement";
import { AddElement } from "../AddElement/AddElement";
import { ElementProp } from "../ElementProp/ElementProp";
import "./Sidebar.css";
import { Save } from "../Save/Save";

export const SideBar: React.FC = () => {
    const navigate = useNavigate(); 

    const handleLogout = () => {
        localStorage.removeItem("username");
        navigate("/", { replace: true }); 
    };

    return (
        <div className='sidebar'>
            <AddElement />
            <ElementProp />
            <br />
            <DeleteElement />
            <br />
            <Save />
            <br />
            <button onClick={handleLogout} className="logout-button">
                Logout
            </button>
        </div>
    );
};
