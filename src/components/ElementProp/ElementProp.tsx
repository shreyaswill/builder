import { useDispatch, useSelector } from "react-redux";
import "./ElementProp.css";
import { SelectedPropState } from "../../redux/selectedProps";
import { changeHeight, changePaddingLeft, changePaddingRight, changePaddingTop, changePaddingBottom, changeWidth, changeBackground, ElementPropState } from "../../redux/elementProps";
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
                        <label>
                                Left Padding:{" "}
                                <input
                                        type="number"
                                        value={props[selected]?.paddingLeft || 0}
                                        onChange={(e) => dispatch(changePaddingLeft({ id: selected, value: Number(e.target.value) }))}
                                />
                        </label>
                        <label>
                                Left Padding:{" "}
                                <input
                                        type="number"
                                        value={props[selected]?.paddingRight || 0}
                                        onChange={(e) => dispatch(changePaddingRight({ id: selected, value: Number(e.target.value) }))}
                                />
                        </label>
                        <label>
                                Left Padding:{" "}
                                <input
                                        type="number"
                                        value={props[selected]?.paddingTop || 0}
                                        onChange={(e) => dispatch(changePaddingTop({ id: selected, value: Number(e.target.value) }))}
                                />
                        </label>
                        <label>
                                Left Padding:{" "}
                                <input
                                        type="number"
                                        value={props[selected]?.paddingBottom || 0}
                                        onChange={(e) => dispatch(changePaddingBottom({ id: selected, value: Number(e.target.value) }))}
                                />
                        </label>


                </div>
        );
};
