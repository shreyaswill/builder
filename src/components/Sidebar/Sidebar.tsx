import { DeleteElement } from "../DeleteElement/DeleteElement";
import { AddElement } from "../AddElement/AddElement";
import { ElementProp } from "../ElementProp/ElementProp";
import "./sidebar.css";

export const SideBar: React.FC = () => {
    return (
        <div className={`sidebar`}>
            <AddElement />
            <ElementProp />
            <br />
            <DeleteElement />
        </div>
    );
};
