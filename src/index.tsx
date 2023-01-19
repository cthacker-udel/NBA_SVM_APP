/* eslint-disable jest/require-hook -- disabled */

import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { CurrentPlayerContextProvider } from "./provider";

const root = ReactDOM.createRoot(
    // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style -- disabled
    document.querySelector("#root") as HTMLElement,
);

root.render(
    <React.StrictMode>
        <CurrentPlayerContextProvider>
            <App />
        </CurrentPlayerContextProvider>
    </React.StrictMode>,
);
