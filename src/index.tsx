/* eslint-disable @typescript-eslint/no-explicit-any -- disabled */
/* eslint-disable require-await -- disabled */
/* eslint-disable jest/require-hook -- disabled */

import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { SWRConfig } from "swr";

import App from "./App";
import { CurrentPlayerContextProvider } from "./provider";

const root = ReactDOM.createRoot(
    // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style -- disabled
    document.querySelector("#root") as HTMLElement,
);

root.render(
    <React.StrictMode>
        <SWRConfig
            value={{
                fetcher: async (resource, init): Promise<Response> =>
                    fetch(`http://localhost:5000${resource}`, ...init),
                provider: (): Map<any, any> => new Map(),
                refreshInterval: 1250,
                revalidateOnMount: true,
            }}
        >
            <CurrentPlayerContextProvider>
                <App />
            </CurrentPlayerContextProvider>
        </SWRConfig>
    </React.StrictMode>,
);
