import { DeleteElement } from "../DeleteElement/DeleteElement";
import { AddElement } from "../AddElement/AddElement";
import { ElementProp } from "../ElementProp/ElementProp";
import "./Sidebar.css";
import { Save } from "../Save/Save";

export const SideBar: React.FC = () => {
    return (
        <div className='sidebar'>
            <AddElement />
            <ElementProp />
            <br />
            <DeleteElement />
            <br />
            <Save/>
        </div>
    );
};
