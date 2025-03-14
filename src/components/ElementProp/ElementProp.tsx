import { useDispatch, useSelector } from "react-redux";
import "./ElementProp.css";
import { SelectedPropState } from "../../redux/selectedProps";
import { changeHeight, changeWidth, changeBackground, ElementPropState } from "../../redux/elementProps";
export const ElementProp: React.FC = () => {
    const props = useSelector((state: { eprops: ElementPropState }) => state.eprops.elements);
    const selected = useSelector((state: { selected: SelectedPropState }) => state.selected.element)!;
    const dispatch = useDispatch();

    return (
        <div className="controls">
            <label>
                Width:{" "}
                <input
                    type="number"
                    disabled={selected === undefined}
                    value={props[selected]?.width || 0}
                    onChange={(e) => dispatch(changeWidth({ id: selected, value: Number(e.target.value) }))}
                />
            </label>
            <label>
                Height:{" "}
                <input
                    type="number"
                    disabled={selected === undefined}
                    value={props[selected]?.height || 0}
                    onChange={(e) => dispatch(changeHeight({ id: selected, value: Number(e.target.value) }))}
                />
            </label>
            <label>
                Background Color:{" "}
                <input
                    type="color"
                    disabled={selected === undefined}
                    value={props[selected]?.backgroundColor || 'white'}
                    onChange={(e) => dispatch(changeBackground({ id: selected, value: e.target.value }))}
                />
            </label>
        </div>
    );
};
