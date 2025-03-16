import "./AddElement.css";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedIds, incrementId } from "../../redux/selected";
import { addElement } from "../../redux/build";
import { useDrag } from "react-dnd";
import { DraggableTypes } from "../../constants";
import { DispatchType, RootState } from "../../redux";
//

export const AddElement: React.FC = () => {
        const selected = useSelector((state: RootState) => getSelectedIds(state))!;
        const dispatch = useDispatch<DispatchType>();
        const addDiv = (pid?: number) => {
                dispatch(addElement({ pid, id: selected.nextId }));
                dispatch(incrementId());
        };
        const [propObject, dragRef] = useDrag(() => {
                return {
                        type: DraggableTypes.DIV_ELEMENT,
                        item: { name: DraggableTypes.DIV_ELEMENT },
                        end: (item, monitor) => {
                                const resultFromDrop = monitor.getDropResult<{ id: number | undefined }>();
                                if (item && resultFromDrop) {
                                        //dropped new component into parent (resultFromDrop.id) else Canvas
                                        addDiv(resultFromDrop.id);
                                }
                        },
                        collect: (monitor) => {
                                return {
                                        opacity: monitor.isDragging() ? 0.5 : 1,
                                };
                        },
                }
        }, [selected.nextId]);
        return (
                <button
                        ref={dragRef as unknown as React.RefObject<HTMLButtonElement>}
                        className="tooltip"
                        onClick={() => addDiv(selected.selectedId)}
                        style={{ opacity: propObject.opacity }}
                >
                        Add Div
                        <span className="tooltip-text">Drag to add a new div</span>
                </button>
        );
};
