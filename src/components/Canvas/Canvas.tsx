import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { DraggableTypes } from "../../constants";
import { getRoots } from "../../redux/build";
import { changeElement } from "../../redux/selected";
import { DivElement } from "../DivElement/DivElement";
import "./Canvas.css";
import { DispatchType, RootState } from "../../redux";

export const Canvas: React.FC = () => {
    const eprops = useSelector((state: RootState) => getRoots(state));
    const dispatch = useDispatch<DispatchType>();

    const [{ isOver, canDrop }, dropRef] = useDrop(() => {
        return {
            accept: DraggableTypes.DIV_ELEMENT,
            drop: ( _, monitor) => {
                const isOwner = monitor.isOver({shallow: true});
                if (isOwner)
                    return {id: undefined}//no parent id
            },          
            collect: (monitor) => {
                return {
                    isOver: monitor.isOver({ shallow: true }),
                    canDrop: monitor.canDrop()
                };
            }
        }
    }, []);
    
    const isActive = canDrop && isOver
    return (
        <div ref={dropRef as unknown as React.RefObject<HTMLDivElement>} className={`main-content ${isActive ? 'dragging' : ''}`} onClick={() => dispatch(changeElement(undefined))}>
            {isActive && <div className="dragtext">Release to drop</div>}
            {eprops?.length === 0 && <h1>Let's get started !</h1>}
            {eprops?.map((id) => (
                <DivElement key={id} id={id} />
            ))}
        </div>
    );
};
