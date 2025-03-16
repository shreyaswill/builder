import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { DraggableTypes } from "../../constants";
import { DispatchType, RootState } from "../../redux";
import { getEleProps } from "../../redux/build";
import { changeElement, getSelectedElementId } from "../../redux/selected";
import "./DivElement.css";

export const DivElement: React.FC<{ id: number }> = ({ id }) => {

    const dispatch = useDispatch<DispatchType>();
    const props = useSelector((state: RootState) => getEleProps(state, id));
    const selectedId = useSelector((state: RootState) => getSelectedElementId(state));

    const [{ isOver, canDrop }, dropRef] = useDrop(() => ({
        accept: DraggableTypes.DIV_ELEMENT,
        drop: (_, monitor) => {
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

    if (!props) return null;
    const updateSelected = (id:number | null) => {
        if (id !== null) dispatch(changeElement(id));
    }
    
    const isActive = canDrop && isOver

    return (
        <div ref={dropRef as unknown as React.RefObject<HTMLDivElement>}
            style={{
                height: props.height,
                width: props.width,
                backgroundColor: props.backgroundColor,
                paddingLeft: props.paddingLeft,
                paddingRight: props.paddingRight,
                paddingTop: props.paddingTop,
                paddingBottom: props.paddingBottom,
                marginLeft: props.marginLeft,
                marginRight: props.marginRight,
                marginTop: props.marginTop,
                marginBottom: props.marginBottom,
                border: `${props.borderWidth}px solid ${props.borderColor}`,
            }}
            className={`dynamic-div ${selectedId === id ? "selected" : ""}`}
            onClick={(e) => {
                e.stopPropagation();
                updateSelected(selectedId === id ? null : id)}
            }
        >
            <p>{isActive ? 'Drop here' : `Div ${id}`}</p>
            {props.children.length > 0 && props.children.map((childId) => (
                <DivElement key={childId} id={childId} />
            ))}
        </div>
    );
};
