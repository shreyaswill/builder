import { useNavigate } from "react-router-dom";
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
            <h2 className='sidebar-title'>Elements</h2>
            <hr className='divider' />
            <AddElement />
            <br></br>
            <br></br>
            <h2 className='sidebar-title2'>Styling</h2>
            <hr className='divider' />
            <ElementProp />
            <br />
            <DeleteElement />
            <br />
            <br />
            <button onClick={handleLogout} className="logout-button">
                Logout
            </button>
        </div>
    );
};
