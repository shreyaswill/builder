import "./App.css";
import { Home } from "./pages/home";
import { Provider } from "react-redux";
import { store } from "./redux";

function App() {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    );
}

export default App;
