
import { useDispatch, useSelector } from "react-redux";
import "./AddElement.css"
import { incrementId, SelectedPropState } from "../../redux/selectedProps";
import { addElement } from "../../redux/elementProps";
export const AddElement: React.FC = () => {
    const selected = useSelector((state: {selected: SelectedPropState}) => state.selected);
    const dispatch = useDispatch();
    const addDiv = () => {
        dispatch(addElement({pid: selected.element, id: selected.lastId}));
        dispatch(incrementId());
    }
    return (
        <button className="add-div-btn" onClick={addDiv}>Div</button>
    );
}