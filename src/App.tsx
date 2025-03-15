import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import { persistor, store } from "./redux";
import { AppRoutes } from "./routes";

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppRoutes/>
            </PersistGate>
        </Provider>
    );
}

export default App;
