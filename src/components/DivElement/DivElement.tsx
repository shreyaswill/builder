import "./DivElement.css"
import { useDispatch, useSelector } from "react-redux";
import { ElementPropState } from "../../redux/elementProps";
import { changeElement, SelectedPropState } from "../../redux/selectedProps";
import { useDrop } from "react-dnd";
import { DraggableTypes } from "../../constants";

export const DivElement: React.FC<{ id: number }> = ({ id }) => {

    const dispatch = useDispatch();
    const element = useSelector((state: {eprops: ElementPropState}) => state.eprops.elements[id]);
    const selected = useSelector((state: {selected: SelectedPropState}) => state.selected.elementId);

    const [{ isOver, canDrop }, dropRef] = useDrop(() => ({
        accept: DraggableTypes.DIV_ELEMENT,
        drop: (item, monitor) => {
            const isOwner = monitor.isOver({shallow: true});
            if (isOwner)
                return {id}//parent id
        },
        collect: (monitor) => {
            return {
                isOver: monitor.isOver({ shallow: true }),
                canDrop: monitor.canDrop()
            };
        },
    }));

    if (!element) return null;
    const updateSelected = (id:number | null) => {
        if (id !== null) dispatch(changeElement(id));
    }
    
    const isActive = canDrop && isOver

    return (
        <div ref={dropRef as unknown as React.RefObject<HTMLDivElement>}
            style={{
                height: element.height,
                width: element.width,
                backgroundColor: element.backgroundColor,
                paddingLeft: element.paddingLeft,
                paddingRight: element.paddingRight,
                paddingTop: element.paddingTop,
                paddingBottom: element.paddingBottom,
                marginLeft: element.marginLeft,
                marginRight: element.marginRight,
                marginTop: element.marginTop,
                marginBottom: element.marginBottom,
                border: `${element.borderWidth}px solid ${element.borderColor}`,
            }}
            className={`dynamic-div ${selected === id ? "selected" : ""}`}
            onClick={(e) => {
                e.stopPropagation();
                updateSelected(selected === id ? null : id)}
            }
        >
            <p>{isActive ? 'Drop here' : `Div ${id}`}</p>
            {element.children.length > 0 && element.children.map((childId) => (
                <DivElement key={childId} id={childId} />
            ))}
        </div>
    );
};
