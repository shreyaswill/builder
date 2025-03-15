import { useNavigate } from "react-router-dom";
import { DeleteElement } from "../DeleteElement/DeleteElement";
import { AddElement } from "../AddElement/AddElement";
import { ElementProp } from "../ElementProp/ElementProp";
import "./Sidebar.css";

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
            <h2 className='sidebar-title'>Styling</h2>
            <hr className='divider' />
            <ElementProp />
            <br />
            <DeleteElement />
            <br />
            <button onClick={handleLogout} className="logout-button">
                Logout
            </button>
        </div>
    );
};
