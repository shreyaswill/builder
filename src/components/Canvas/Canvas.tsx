import { useDispatch, useSelector } from "react-redux";
import { ElementPropState } from "../../redux/elementProps";
import { DivElement } from "../DivElement/DivElement";
import "./Canvas.css";
import { changeElement } from "../../redux/selectedProps";

export const Canvas: React.FC = () => {
    const eprops = useSelector((state: {eprops: ElementPropState}) => state.eprops);
    const dispatch = useDispatch();
    return (
        <div className="main-content" onClick={() => dispatch(changeElement(undefined))}>
            {eprops.roots.length === 0 && <h1>Let's get started !</h1>}
            {eprops.roots.map((id) => <DivElement key={id} id={id} />)}
        </div>
    );
};
