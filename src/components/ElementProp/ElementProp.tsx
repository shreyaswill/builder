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
                        <label>
                                Width:{" "}
                                <input
                                        type="number"
                                        disabled={selectedId === undefined}
                                        value={props?.width || 0}
                                        onChange={(e) => selectedId && dispatch(updateElement({
                                                property: "width", id: selectedId, value: Number(e.target.value) 
                                        }))}
                                />
                        </label>
                        <label>
                                Height:{" "}
                                <input
                                        type="number"
                                        disabled={selectedId === undefined}
                                        value={props?.height || 0}
                                        onChange={(e) => selectedId && dispatch(updateElement({
                                                property: "height", id: selectedId, value: Number(e.target.value) 
                                        }))}
                                />
                        </label>
                        <label>
                                Background Color:{" "}
                                <input
                                        type="color"
                                        disabled={selectedId === undefined}
                                        value={props?.backgroundColor || '#ffffff'}
                                        onChange={(e) => selectedId && dispatch(updateElement({ 
                                               property:"backgroundColor", id: selectedId, value: e.target.value 
                                        }))}
                                />
                        </label>
                        <label>
                                Border Thickness:{" "}
                                <input
                                        type="number"
                                        disabled={selectedId === undefined}
                                        value={props?.borderWidth || 2}
                                        onChange={(e) => selectedId && dispatch(updateElement({
                                                property: "borderWidth", id: selectedId, value: Number(e.target.value)
                                        }))}
                                />
                        </label>

                        <label>
                                Border Color:{" "}
                                <input
                                        type="color"
                                        disabled={selectedId === undefined}
                                        value={props?.borderColor || "#000000"}
                                        onChange={(e) => selectedId && dispatch(updateElement({
                                                property: "borderColor", id: selectedId, value: e.target.value 
                                        }))}
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
                                                value={props?.paddingTop || 0}
                                                onChange={(e) => selectedId && dispatch(updateElement({
                                                        property: "paddingTop", id: selectedId, value: Number(e.target.value)
                                                }))}
                                        />
                                </div>
                                <div className="side-paddings">
                                        <div className="padding-label">
                                                <label>Left</label>
                                                <input
                                                        type="number"
                                                        className="padding-input"
                                                        value={props?.paddingLeft || 0}
                                                        onChange={(e) => selectedId && dispatch(updateElement({
                                                                property: "paddingLeft",  id: selectedId, value: Number(e.target.value) 
                                                        }))}
                                                />
                                        </div>
                                        <div className="padding-label">
                                                <label>Right</label>
                                                <input
                                                        type="number"
                                                        className="padding-input"
                                                        value={props?.paddingRight || 0}
                                                        onChange={(e) => selectedId && dispatch(updateElement({
                                                                property: "paddingRight", id: selectedId, value: Number(e.target.value) 
                                                        }))}
                                                />
                                        </div>
                                </div>
                                <div className="padding-label">
                                        <label>Bottom</label>
                                        <input
                                                type="number"
                                                className="padding-input"
                                                value={props?.paddingBottom || 0}
                                                onChange={(e) => selectedId && dispatch(updateElement({
                                                        property: "paddingBottom",  id: selectedId, value: Number(e.target.value) 
                                                }))}
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
                                                value={props?.marginTop || 0}
                                                onChange={(e) => selectedId && dispatch(updateElement({
                                                        property: "marginTop",  id: selectedId, value: Number(e.target.value) 
                                                }))}
                                        />
                                </div>
                                <div className="side-paddings">
                                        <div className="padding-label">
                                                <label>Left</label>
                                                <input
                                                        type="number"
                                                        className="padding-input"
                                                        value={props?.marginLeft || 0}
                                                        onChange={(e) => selectedId && dispatch(updateElement({
                                                                property: "marginLeft",  id: selectedId, value: Number(e.target.value) 
                                                        }))}
                                                />
                                        </div>
                                        <div className="padding-label">
                                                <label>Right</label>
                                                <input
                                                        type="number"
                                                        className="padding-input"
                                                        value={props?.marginRight || 0}
                                                        onChange={(e) => selectedId && dispatch(updateElement({
                                                                property: "marginRight",  id: selectedId, value: Number(e.target.value) 
                                                        }))}
                                                />
                                        </div>
                                </div>
                                <div className="padding-label">
                                        <label>Bottom</label>
                                        <input
                                                type="number"
                                                className="padding-input"
                                                value={props?.marginBottom || 0}
                                                onChange={(e) => selectedId && dispatch(updateElement({
                                                        property: "marginBottom",  id: selectedId, value: Number(e.target.value) 
                                                }))}
                                        />
                                </div>
                        </div>


                </div>
        );
};
