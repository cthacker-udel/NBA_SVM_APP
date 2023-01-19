import React from "react";
import type { CurrentPlayerContextInterface } from "src/@types";
import { CurrentPlayerContext } from "src/context";

/**
 * Uses the CurrentPlayer context, can only be used from a child of the CurrentPlayerContext.Provider component
 *
 * @returns The context value or throws an exception if used incorrectly
 */
export const useCurrentPlayerContext = (): CurrentPlayerContextInterface => {
    const value = React.useContext(CurrentPlayerContext);
    if (value === undefined) {
        throw new Error(
            "Invalid usage of current player context, must be used from the child of a CurrentPlayerContext.Provider component",
        );
    }
    return value;
};
