/* eslint-disable @typescript-eslint/indent -- disabled */
/* eslint-disable require-await -- disabled for now */
/* eslint-disable @typescript-eslint/require-await -- disabled for now */
/* eslint-disable node/no-unpublished-import -- disabled, is published */
/* eslint-disable sonarjs/no-all-duplicated-branches -- disabled */
import React from "react";
import { Button, Image } from "react-bootstrap";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import type { Option } from "react-bootstrap-typeahead/types/types";
import type { Player } from "src/@types";
import emptyPlayerProfilePicture from "src/assets/images/noplayerheadshot.png";
import { Layout } from "src/common";
import { useCurrentPlayerContext } from "src/hooks";
import useSwr from "swr";

import styles from "./Dashboard.module.css";

/**
 * The dashboard component, houses the main display, and all the inputs as well.
 *
 * @returns Dashboard component
 */
export const Dashboard = (): JSX.Element => {
    const [currentSelectedPlayer, setCurrentSelectedPlayer] =
        React.useState<string>("");
    const [imgSource, setImgSource] = React.useState<string>("");
    const { data: playerNames, isLoading } = useSwr<string[]>("/playernames", {
        refreshInterval: 0,
    });

    const { data: currentPlayer } = useSwr<Player>(
        `/getplayer${
            currentSelectedPlayer === ""
                ? ""
                : `?player_name=${currentSelectedPlayer}`
        }`,
        {
            refreshInterval: 0,
        },
    );

    const handlePlayerSelection = React.useCallback(
        async (selectedOption: Option[]) => {
            if (selectedOption.length === 1) {
                setCurrentSelectedPlayer(selectedOption[0] as string);
            }
        },
        [],
    );

    const handlePlayerSearch = React.useCallback(
        (query: string): string[] => {
            if (playerNames === undefined) {
                return [];
            }
            return playerNames.filter(
                (eachName) =>
                    eachName.startsWith(query) || eachName.includes(query),
            );
        },
        [playerNames],
    );

    React.useEffect(() => {
        if (currentPlayer !== undefined) {
            if (currentPlayer.headshot_link === undefined) {
                setImgSource(emptyPlayerProfilePicture);
            } else {
                setImgSource(currentPlayer.headshot_link);
            }
        }
    }, [currentPlayer]);

    return (
        <Layout backgroundStyle={styles.dashboard_background}>
            <div className={styles.dashboard_content}>
                <div className={styles.dashboard_title}>
                    {"NBA Player SVM Dashboard"}
                </div>
                <AsyncTypeahead
                    id="player_name_typeahead"
                    isLoading={isLoading}
                    onChange={handlePlayerSelection}
                    onSearch={handlePlayerSearch}
                    options={([...new Set(playerNames)] as string[]) ?? []}
                />
                <div className={styles.dashboard_statistics}>
                    <div
                        className={styles.dashboard_player_general_info_content}
                    >
                        <div
                            className={
                                styles.dashboard_player_general_info_title
                            }
                        >
                            {"General Player Info"}
                        </div>
                        <Image
                            className={styles.dashboard_player_image}
                            onError={(): void => {
                                setImgSource(emptyPlayerProfilePicture);
                            }}
                            src={imgSource}
                        />
                        <div className={styles.dashboard_player_general_info}>
                            {currentPlayer === undefined
                                ? "No information available, please select a player."
                                : "No information available, please select a player."}
                        </div>
                    </div>
                    <div className={styles.dashboard_player_stats_content}>
                        <div className={styles.dashboard_player_stats_title}>
                            {"Player Statistics"}
                        </div>
                        <div className={styles.dashboard_player_statistics}>
                            {currentPlayer === undefined
                                ? "Statistics go here"
                                : "Statistics go here"}
                        </div>
                    </div>
                </div>
                <div className={styles.dashboard_model_bar}>
                    <Button variant="primary">
                        {"SVM (Support Vector Machine)"}
                    </Button>
                    <Button variant="secondary">{"Linear Regression"}</Button>
                    <Button variant="dark">{"Logistic Regression"}</Button>
                    <Button variant="warning">{"Deep Forest"}</Button>
                </div>
            </div>
        </Layout>
    );
};
