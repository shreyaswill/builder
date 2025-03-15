import { useDispatch, useSelector } from "react-redux";
import { RootState, DispatchType } from "../../redux";
import { getSelectedEleProps, updateElement } from "../../redux/build";
import { getSelectedElementId } from "../../redux/selected";
import "./ElementProp.css";
export const ElementProp: React.FC = () => {
    const selectedId = useSelector((state: RootState) => getSelectedElementId(state));
    const props = useSelector((state: RootState) => getSelectedEleProps(state));

    const dispatch = useDispatch<DispatchType>();

        return (
                <div className="controls">

                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                        <label style={{ width: "150px" }}>Width</label>
                                        <input
                                                type="number"
                                                disabled={selected === undefined}
                                                value={props[selected]?.width || 0}
                                                onChange={(e) => dispatch(changeWidth({ id: selected, value: Number(e.target.value) }))}
                                                style={{ marginLeft: "8px", flex: 1 }}
                                        />
                                </div>

                                <div style={{ display: "flex", alignItems: "center" }}>
                                        <label style={{ width: "150px" }}>Height</label>
                                        <input
                                                type="number"
                                                disabled={selected === undefined}
                                                value={props[selected]?.height || 0}
                                                onChange={(e) => dispatch(changeHeight({ id: selected, value: Number(e.target.value) }))}
                                                style={{ marginLeft: "8px", flex: 1 }}
                                        />
                                </div>
                                <br></br>

                                <div style={{ display: "flex", alignItems: "center" }}>
                                        <label style={{ width: "150px" }}>Border- Thickness</label>
                                        <input
                                                type="number"
                                                disabled={selected === undefined}
                                                value={props[selected]?.borderWidth || 2}
                                                onChange={(e) => dispatch(changeBorderWidth({ id: selected, value: Number(e.target.value) }))}
                                                style={{ marginLeft: "8px", flex: 1 }}
                                        />
                                </div>

                        
                                <div style={{ display: "flex", alignItems: "center" }}>
                                        <label style={{ width: "150px" }}>Border Color</label>
                                        <input
                                                type="color"
                                                disabled={selected === undefined}
                                                value={props[selected]?.borderColor || "#000000"}
                                                onChange={(e) => dispatch(changeBorderColor({ id: selected, value: e.target.value }))}
                                                style={{ marginLeft: "8px", flex: 1 }}
                                        />
                                </div>
                         

                                <div style={{ display: "flex", alignItems: "center" }}>
                                        <label style={{ width: "150px" }}>BG Color</label>
                                        <input
                                                type="color"
                                                disabled={selected === undefined}
                                                value={props[selected]?.backgroundColor || 'white'}
                                                onChange={(e) => dispatch(changeBackground({ id: selected, value: e.target.value }))}
                                                style={{ marginLeft: "8px", flex: 1 }}
                                        />
                                </div>
                        </div>

                        {/* Padding Section */}
                        <div className="padding-header">
                                <br></br>
                        </div>
                        <div className="outer-box">
                                <div className="padding-controls">
                                        <div className="padding-label">
                                                <label>TOP</label>
                                                <input
                                                        type="number"
                                                        className="padding-input"
                                                        value={props[selected]?.paddingTop || 0}
                                                        onChange={(e) => dispatch(changePaddingTop({ id: selected, value: Number(e.target.value) }))}
                                                />
                                        </div>
                                        <div className="side-paddings">
                                                <div className="padding-label">
                                                        <label>LEFT</label>
                                                        <input
                                                                type="number"
                                                                className="padding-input"
                                                                value={props[selected]?.paddingLeft || 0}
                                                                onChange={(e) => dispatch(changePaddingLeft({ id: selected, value: Number(e.target.value) }))}
                                                        />
                                                </div>
                                                <div className="center">Padding</div>
                                                <div className="padding-label">
                                                        <label>RIGHT</label>
                                                        <input
                                                                type="number"
                                                                className="padding-input"
                                                                value={props[selected]?.paddingRight || 0}
                                                                onChange={(e) => dispatch(changePaddingRight({ id: selected, value: Number(e.target.value) }))}
                                                        />
                                                </div>
                                        </div>
                                        <div className="padding-label">
                                                <label>BOTTOM</label>
                                                <input
                                                        type="number"
                                                        className="padding-input"
                                                        value={props[selected]?.paddingBottom || 0}
                                                        onChange={(e) => dispatch(changePaddingBottom({ id: selected, value: Number(e.target.value) }))}
                                                />
                                        </div>
                                </div>
                        </div>



                        {/* margin section */}
                        <div className="padding-header">
                        </div>
                        <div className="outer-box">
                                <div className="padding-controls">
                                        <div className="padding-label">
                                                <label>TOP</label>
                                                <input
                                                        type="number"
                                                        className="padding-input"
                                                        value={props[selected]?.marginTop || 0}
                                                        onChange={(e) => dispatch(changeMarginTop({ id: selected, value: Number(e.target.value) }))}
                                                />
                                        </div>
                                        <div className="side-paddings">
                                                <div className="padding-label">
                                                        <label>LEFT</label>
                                                        <input
                                                                type="number"
                                                                className="padding-input"
                                                                value={props[selected]?.marginLeft || 0}
                                                                onChange={(e) => dispatch(changeMarginLeft({ id: selected, value: Number(e.target.value) }))}
                                                        />
                                                </div>
                                                <div className="center">Margin</div>
                                                <div className="padding-label">
                                                        <label>RIGHT</label>
                                                        <input
                                                                type="number"
                                                                className="padding-input"
                                                                value={props[selected]?.marginRight || 0}
                                                                onChange={(e) => dispatch(changeMarginRight({ id: selected, value: Number(e.target.value) }))}
                                                        />
                                                </div>
                                        </div>
                                        <div className="padding-label">
                                                <label>BOTTOM</label>
                                                <input
                                                        type="number"
                                                        className="padding-input"
                                                        value={props[selected]?.marginBottom || 0}
                                                        onChange={(e) => dispatch(changeMarginBottom({ id: selected, value: Number(e.target.value) }))}
                                                />
                                        </div>
                                </div>
                        </div>

                </div>
            </div>
        </>
    );
};
