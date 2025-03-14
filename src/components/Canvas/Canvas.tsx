import { useDispatch, useSelector } from "react-redux";
import "./Canvas.css";
import { ElementProps, ElementPropState } from "../../redux/elementProps";
import { changeElement, SelectedPropState } from "../../redux/selectedProps";

export const Canvas: React.FC = () => {

    const eprops = useSelector((state: {eprops: ElementPropState}) => state.eprops);
    const selected = useSelector((state: {selected: SelectedPropState}) => state.selected.element);
    const dispatch = useDispatch();
    const updateSelected = (id:string | null) => {
        if (id) dispatch(changeElement(id));
    }
    return (
        <div className="main-content">
            {Object.entries(eprops).length === 0 && <h1>Welcome to Shrey's builder</h1>}
            {Object.entries(eprops).map(([id, p]: [string, ElementProps]) => (
                <div style={{height: p.height, width: p.width, backgroundColor: p.backgroundColor}}
                    key={id}
                    className={`dynamic-div ${selected === id ? "selected" : ""}`}
                    onClick={() => updateSelected(selected === id ? null : id)}
                >
                    Div {id}
                </div>
            ))}
        </div>
    );
};
