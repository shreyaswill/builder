import "./AddElement.css";
import { useDispatch, useSelector } from "react-redux";
import { incrementId, SelectedPropState } from "../../redux/selectedProps";
import { addElement } from "../../redux/elementProps";
import { useDrag } from "react-dnd";
import { DraggableTypes } from "../../constants";

//https://react-dnd.github.io/react-dnd/docs/api/hooks-overview

export const AddElement: React.FC = () => {
    const selected = useSelector((state: { selected: SelectedPropState }) => state.selected);
    const dispatch = useDispatch();
    const addDiv = (pid?:number) => {
        dispatch(addElement({ pid, id: selected.nextId }));
        dispatch(incrementId());
    };
    const [propObject, dragRef] = useDrag(() => {
        return {
            type: DraggableTypes.DIV_ELEMENT,
            item: {name: DraggableTypes.DIV_ELEMENT},
            end: (item, monitor) => {
                const resultFromDrop = monitor.getDropResult<{id: number | undefined}>();
                if (item && resultFromDrop) {
                    alert(`You dropped ${selected.nextId} into ${resultFromDrop.id ?? 'Canvas'}!`)
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
        <button ref={dragRef as unknown as React.RefObject<HTMLButtonElement>} className="add-div-btn" onClick={() => addDiv(selected.elementId)} style={{ opacity: propObject.opacity }}>
           Add Div
        </button>
    );
};
