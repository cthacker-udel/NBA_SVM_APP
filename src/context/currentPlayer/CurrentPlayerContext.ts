/* eslint-disable @typescript-eslint/indent -- disabled */
import React from "react";
import type { CurrentPlayerContextInterface } from "src/@types";

export const CurrentPlayerContext = React.createContext<
    CurrentPlayerContextInterface | undefined
>(undefined);
