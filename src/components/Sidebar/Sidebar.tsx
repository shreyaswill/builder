import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux";
import { changeUser, getSelectedElementId } from "../../redux/selected";
import { AddElement } from "../AddElement/AddElement";
import { DeleteElement } from "../DeleteElement/DeleteElement";
import { ElementProp } from "../ElementProp/ElementProp";
import "./Sidebar.css";

export const SideBar: React.FC = () => {
    const dispatch = useDispatch<DispatchType>();
    const selectedId = useSelector((state: RootState) => getSelectedElementId(state));
    const handleLogout = () => {
        dispatch(changeUser())
    };

    return (
        <div className="sidebar">
            <h2>Elements</h2>
            <hr className='divider' />
            <AddElement />
            <br />
            {selectedId && <DeleteElement />}
            <br/>
            {selectedId && <ElementProp />}
            <br />
            <button onClick={handleLogout} className="logout-btn">
                Logout
            </button>
        </div>
    );
};
