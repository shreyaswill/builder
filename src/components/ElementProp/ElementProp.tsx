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
        <>
            <h2>Styling</h2>
            <hr className="divider" />
            <br></br>
            <div className="controls">
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div className="justifiedbox">
                        <label>Width</label>
                        <input
                            type="number"
                            disabled={selectedId === undefined}
                            value={props?.width || 0}
                            onChange={(e) =>
                                selectedId &&
                                dispatch(
                                    updateElement({
                                        property: "width",
                                        id: selectedId,
                                        value: Number(e.target.value),
                                    })
                                )
                            }
                        />
                    </div>

                    <div className="justifiedbox">
                        <label>Height</label>
                        <input
                            type="number"
                            disabled={selectedId === undefined}
                            value={props?.height || 0}
                            onChange={(e) =>
                                selectedId &&
                                dispatch(
                                    updateElement({
                                        property: "height",
                                        id: selectedId,
                                        value: Number(e.target.value),
                                    })
                                )
                            }
                        />
                    </div>
                    <br></br>

                    <div className="justifiedbox">
                        <label>Border thickness</label>
                        <input
                            type="number"
                            disabled={selectedId === undefined}
                            value={props?.borderWidth || 2}
                            onChange={(e) =>
                                selectedId &&
                                dispatch(
                                    updateElement({
                                        property: "borderWidth",
                                        id: selectedId,
                                        value: Number(e.target.value),
                                    })
                                )
                            }
                        />
                    </div>
                    <div className="justifiedbox">
                        <label>Border color</label>
                        <input
                            type="color"
                            disabled={selectedId === undefined}
                            value={props?.borderColor || "#000000"}
                            onChange={(e) =>
                                selectedId &&
                                dispatch(
                                    updateElement({
                                        property: "borderColor",
                                        id: selectedId,
                                        value: e.target.value,
                                    })
                                )
                            }
                        />
                    </div>

                    <div className="justifiedbox">
                        <label>BG color</label>
                        <input
                            type="color"
                            disabled={selectedId === undefined}
                            value={props?.backgroundColor || "#ffffff"}
                            onChange={(e) =>
                                selectedId &&
                                dispatch(
                                    updateElement({
                                        property: "backgroundColor",
                                        id: selectedId,
                                        value: e.target.value,
                                    })
                                )
                            }
                        />
                    </div>
                </div>

                {/* Padding Section */}
                <div className="padding-header"></div>
                <div className="outer-box">
                    <div className="padding-controls">
                        <div className="padding-label">
                            <label>TOP</label>
                            <input
                                type="number"
                                className="padding-input"
                                value={props?.paddingTop || 0}
                                onChange={(e) =>
                                    selectedId &&
                                    dispatch(
                                        updateElement({
                                            property: "paddingTop",
                                            id: selectedId,
                                            value: Number(e.target.value),
                                        })
                                    )
                                }
                            />
                        </div>
                        <div className="side-paddings">
                            <div className="padding-label">
                                <label>LEFT</label>
                                <input
                                    type="number"
                                    className="padding-input"
                                    value={props?.paddingLeft || 0}
                                    onChange={(e) =>
                                        selectedId &&
                                        dispatch(
                                            updateElement({
                                                property: "paddingLeft",
                                                id: selectedId,
                                                value: Number(e.target.value),
                                            })
                                        )
                                    }
                                />
                            </div>
                            <div className="center">Padding</div>
                            <div className="padding-label">
                                <label>RIGHT</label>
                                <input
                                    type="number"
                                    className="padding-input"
                                    value={props?.paddingRight || 0}
                                    onChange={(e) =>
                                        selectedId &&
                                        dispatch(
                                            updateElement({
                                                property: "paddingRight",
                                                id: selectedId,
                                                value: Number(e.target.value),
                                            })
                                        )
                                    }
                                />
                            </div>
                        </div>
                        <div className="padding-label">
                            <input
                                type="number"
                                className="padding-input"
                                value={props?.paddingBottom || 0}
                                onChange={(e) =>
                                    selectedId &&
                                    dispatch(
                                        updateElement({
                                            property: "paddingBottom",
                                            id: selectedId,
                                            value: Number(e.target.value),
                                        })
                                    )
                                }
                            />
                            <label>BOTTOM</label>
                        </div>
                    </div>
                </div>

                {/* margin section */}
                <div className="padding-header"></div>
                <div className="outer-box">
                    <div className="padding-controls">
                        <div className="padding-label">
                            <label>TOP</label>
                            <input
                                type="number"
                                className="padding-input"
                                value={props?.marginTop || 0}
                                onChange={(e) =>
                                    selectedId &&
                                    dispatch(
                                        updateElement({
                                            property: "marginTop",
                                            id: selectedId,
                                            value: Number(e.target.value),
                                        })
                                    )
                                }
                            />
                        </div>
                        <div className="side-paddings">
                            <div className="padding-label">
                                <label>LEFT</label>
                                <input
                                    type="number"
                                    className="padding-input"
                                    value={props?.marginLeft || 0}
                                    onChange={(e) =>
                                        selectedId &&
                                        dispatch(
                                            updateElement({
                                                property: "marginLeft",
                                                id: selectedId,
                                                value: Number(e.target.value),
                                            })
                                        )
                                    }
                                />
                            </div>
                            <div className="center">Margin</div>
                            <div className="padding-label">
                                <label>RIGHT</label>
                                <input
                                    type="number"
                                    className="padding-input"
                                    value={props?.marginRight || 0}
                                    onChange={(e) =>
                                        selectedId &&
                                        dispatch(
                                            updateElement({
                                                property: "marginRight",
                                                id: selectedId,
                                                value: Number(e.target.value),
                                            })
                                        )
                                    }
                                />
                            </div>
                        </div>
                        <div className="padding-label">
                            <input
                                type="number"
                                className="padding-input"
                                value={props?.marginBottom || 0}
                                onChange={(e) =>
                                    selectedId &&
                                    dispatch(
                                        updateElement({
                                            property: "marginBottom",
                                            id: selectedId,
                                            value: Number(e.target.value),
                                        })
                                    )
                                }
                            />
                            <label>BOTTOM</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
