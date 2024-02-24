import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./components/store/store";
import 'ace-builds/src-noconflict/ace';

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
);