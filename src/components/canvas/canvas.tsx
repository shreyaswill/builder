import { useDispatch, useSelector } from "react-redux";
import "./canvas.css";
import { decrement, increment } from "../../redux/counterSlice";
import { setUsername, clearUsername } from "../../redux/usernameSlice";
export const Canvas: React.FC = () => {
    const count = useSelector((state: { counter: { value: number } }) => state.counter.value);
    const username = useSelector((state: { username: { value: number } }) => state.username.value);
    const dispatch = useDispatch();
    return (
        <div className="main-content">
            <h1>Welcome to Home</h1>
            <p>This is the main content area.</p>
            <h1>{count}</h1>
            <h1>{username}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(setUsername("Hello"))}>ChangeNameToHello</button>
            <button onClick={() => dispatch(clearUsername())}>ClearUsername</button>
        </div>
    );
}
