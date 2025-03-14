import { useDispatch, useSelector } from "react-redux";
import "./DeleteElement.css";
import { deleteElement } from "../../redux/elementProps";
import { changeElement, SelectedPropState } from "../../redux/selectedProps";

export const DeleteElement: React.FC = () => {
    const selected = useSelector((state: {selected: SelectedPropState}) => state.selected.element);
    const dispatch = useDispatch();
    const deleteE = () => {
        dispatch(deleteElement(selected));
        dispatch(changeElement(undefined));
    };
    return (
        <button className="delete-div-btn" onClick={deleteE} disabled={!selected}>
            Delete Selected
        </button>
    );
};
