
import { useDispatch, useSelector } from "react-redux";
import "./DivElement.css"
import { incrementId, SelectedPropState } from "../../redux/selectedProps";
import { addElement } from "../../redux/elementProps";
export const DivElement: React.FC = () => {
    const lastId = useSelector((state: {selected: SelectedPropState}) => state.selected.lastId);
    const dispatch = useDispatch();
    const addDiv = () => {
        console.log("====>Adding");
        dispatch(addElement(lastId));
        dispatch(incrementId());
    }
    return (
        <button className="add-div-btn" onClick={addDiv}>Add Div</button>
    );
}