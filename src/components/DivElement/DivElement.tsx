import { useDispatch, useSelector } from "react-redux";
import { ElementPropState } from "../../redux/elementProps";
import { changeElement, SelectedPropState } from "../../redux/selectedProps";
import "./DivElement.css"

export const DivElement: React.FC<{ id: number }> = ({ id }) => {

    const dispatch = useDispatch();
    const element = useSelector((state: {eprops: ElementPropState}) => state.eprops.elements[id]);
    const selected = useSelector((state: {selected: SelectedPropState}) => state.selected.elementId);

    if (!element) return null;
    const updateSelected = (id:number | null) => {
        if (id !== null) dispatch(changeElement(id));
    }
    return (
        <div
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
            <p>Div {id}</p>
            {element.children.length > 0 && element.children.map((childId) => (
                <DivElement key={childId} id={childId} />
            ))}
        </div>
    );
};
