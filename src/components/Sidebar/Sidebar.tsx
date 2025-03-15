import { useDispatch } from "react-redux";
import { DispatchType } from "../../redux";
import { changeUser } from "../../redux/selected";
import { AddElement } from "../AddElement/AddElement";
import { DeleteElement } from "../DeleteElement/DeleteElement";
import { ElementProp } from "../ElementProp/ElementProp";
import "./Sidebar.css";

export const SideBar: React.FC = () => {
    //const navigate = useNavigate(); 
    const dispatch = useDispatch<DispatchType>();
    const handleLogout = () => {
        dispatch(changeUser())
        //navigate("/", { replace: true });
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
