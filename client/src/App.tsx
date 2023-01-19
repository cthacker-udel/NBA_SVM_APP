import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages";
import { Dashboard } from "./pages/Dashboard";

/**
 * Creates an instance of the application component
 *
 * @returns The main application component
 */
export const App = (): JSX.Element => (
    <BrowserRouter>
        <Routes>
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<Home />} path="*" />
        </Routes>
    </BrowserRouter>
);

export default App;
