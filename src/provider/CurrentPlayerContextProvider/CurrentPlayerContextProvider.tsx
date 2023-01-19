/* eslint-disable @typescript-eslint/indent -- disabled */
import React, { type ReactNode } from "react";
import type { CurrentPlayerContextInterface, Player } from "src/@types";
import { CurrentPlayerContext } from "src/context";

type CurrentPlayerContextProviderProperties = {
    children: ReactNode;
};

/**
 *
 * @param param0
 */
export const CurrentPlayerContextProvider = ({
    children,
}: CurrentPlayerContextProviderProperties): JSX.Element => {
    const [currentPlayer, setCurrentPlayer] = React.useState<
        Player | undefined
    >(undefined);

    const functionalProperties = React.useMemo<
        Partial<CurrentPlayerContextInterface>
    >(
        () => ({
            setPlayer: (_player: Player): void => {
                setCurrentPlayer(_player);
            },
        }),
        [],
    );

    const providerValues: CurrentPlayerContextInterface =
        React.useMemo<CurrentPlayerContextInterface>(
            () => ({
                ...currentPlayer,
                ...(functionalProperties as CurrentPlayerContextInterface),
            }),
            [currentPlayer, functionalProperties],
        );

    return (
        <CurrentPlayerContext.Provider value={providerValues}>
            {children}
        </CurrentPlayerContext.Provider>
    );
};
