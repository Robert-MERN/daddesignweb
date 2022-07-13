import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./context/ContextProvider";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from 'react-alert-template-basic'
import "./index.css";

// optional configuration
const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AlertProvider template={AlertTemplate} {...options}>
        <ContextProvider>
            <App />
        </ContextProvider>
    </AlertProvider>
)