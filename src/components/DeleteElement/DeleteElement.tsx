import { useDispatch, useSelector } from "react-redux";
import "./DeleteElement.css";
import { deleteElement } from "../../redux/build";
import { changeElement, getSelectedElementId } from "../../redux/selected";
import { DispatchType, RootState } from "../../redux";

export const DeleteElement: React.FC = () => {
    const selectedId = useSelector((state: RootState) => getSelectedElementId(state));
    const dispatch = useDispatch<DispatchType>();
    const deleteE = () => {
        if (selectedId) {
            dispatch(deleteElement(selectedId));
            dispatch(changeElement(undefined));
        }
    };

    return (
        <button className="delete-div-btn" onClick={deleteE} disabled={!selectedId}>
            Delete Div
        </button>
    );
};
