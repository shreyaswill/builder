import { DeleteElement } from "../DeleteElement/DeleteElement";
import { DivElement } from "../DivElement/DivElement";
import { ElementProp } from "../ElementProp/ElementProp";
import "./sidebar.css";

export const SideBar: React.FC = () => {
    return (
        <div className={`sidebar`}>
            <DivElement />
            <ElementProp />
            <br />
            <DeleteElement />
        </div>
    );
};
