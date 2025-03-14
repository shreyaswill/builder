import { useDispatch, useSelector } from "react-redux";
import "./ElementProp.css";
import { SelectedPropState } from "../../redux/selectedProps";
import { changeHeight, changePaddingLeft, changeBorderWidth, changeBorderColor, changePaddingRight, changePaddingTop, changeMarginLeft, changeMarginRight, changeMarginTop, changeMarginBottom, changePaddingBottom, changeWidth, changeBackground, ElementPropState } from "../../redux/elementProps";
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
                                Border Thickness:{" "}
                                <input
                                        type="number"
                                        disabled={selected === undefined}
                                        value={props[selected]?.borderWidth || 2}
                                        onChange={(e) => dispatch(changeBorderWidth({ id: selected, value: Number(e.target.value) }))}
                                />
                        </label>

                        <label>
                                Border Color:{" "}
                                <input
                                        type="color"
                                        disabled={selected === undefined}
                                        value={props[selected]?.borderColor || "#000000"}
                                        onChange={(e) => dispatch(changeBorderColor({ id: selected, value: e.target.value }))}
                                />
                        </label>


                        {/* Padding Section */}
                        <div className="padding-header">
                        <br></br>
                        <h2 className="sidebar-title">Padding</h2>
                        <hr className='divider' />
                        </div>
                        <div className="padding-controls">
                                <div className="padding-label">
                                        <label>Top</label>
                                        <input
                                                type="number"
                                                className="padding-input"
                                                value={props[selected]?.paddingTop || 0}
                                                onChange={(e) => dispatch(changePaddingTop({ id: selected, value: Number(e.target.value) }))}
                                        />
                                </div>
                                <div className="side-paddings">
                                        <div className="padding-label">
                                                <label>Left</label>
                                                <input
                                                        type="number"
                                                        className="padding-input"
                                                        value={props[selected]?.paddingLeft || 0}
                                                        onChange={(e) => dispatch(changePaddingLeft({ id: selected, value: Number(e.target.value) }))}
                                                />
                                        </div>
                                        <div className="padding-label">
                                                <label>Right</label>
                                                <input
                                                        type="number"
                                                        className="padding-input"
                                                        value={props[selected]?.paddingRight || 0}
                                                        onChange={(e) => dispatch(changePaddingRight({ id: selected, value: Number(e.target.value) }))}
                                                />
                                        </div>
                                </div>
                                <div className="padding-label">
                                        <label>Bottom</label>
                                        <input
                                                type="number"
                                                className="padding-input"
                                                value={props[selected]?.paddingBottom || 0}
                                                onChange={(e) => dispatch(changePaddingBottom({ id: selected, value: Number(e.target.value) }))}
                                        />
                                </div>
                        </div>



                        {/* margin section */}
                        <div className="padding-header">
                        <h2 className="sidebar-title">Margin</h2>
                        <hr className='divider' />
                        </div>
                        <div className="padding-controls">
                                <div className="padding-label">
                                        <label>Top</label>
                                        <input
                                                type="number"
                                                className="padding-input"
                                                value={props[selected]?.marginTop || 0}
                                                onChange={(e) => dispatch(changeMarginTop({ id: selected, value: Number(e.target.value) }))}
                                        />
                                </div>
                                <div className="side-paddings">
                                        <div className="padding-label">
                                                <label>Left</label>
                                                <input
                                                        type="number"
                                                        className="padding-input"
                                                        value={props[selected]?.marginLeft || 0}
                                                        onChange={(e) => dispatch(changeMarginLeft({ id: selected, value: Number(e.target.value) }))}
                                                />
                                        </div>
                                        <div className="padding-label">
                                                <label>Right</label>
                                                <input
                                                        type="number"
                                                        className="padding-input"
                                                        value={props[selected]?.marginRight || 0}
                                                        onChange={(e) => dispatch(changeMarginRight({ id: selected, value: Number(e.target.value) }))}
                                                />
                                        </div>
                                </div>
                                <div className="padding-label">
                                        <label>Bottom</label>
                                        <input
                                                type="number"
                                                className="padding-input"
                                                value={props[selected]?.marginBottom || 0}
                                                onChange={(e) => dispatch(changeMarginBottom({ id: selected, value: Number(e.target.value) }))}
                                        />
                                </div>
                        </div>


                </div>
        );
};
