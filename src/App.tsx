import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages";

/**
 * Creates an instance of the application component
 *
 * @returns The main application component
 */
export const App = (): JSX.Element => (
    <BrowserRouter>
        <Routes>
            <Route element={<Home />} path="*" />
        </Routes>
    </BrowserRouter>
);

export default App;
