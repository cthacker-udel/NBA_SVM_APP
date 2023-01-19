/* eslint-disable sonarjs/no-all-duplicated-branches -- disabled */
import React from "react";
import { Button, Image } from "react-bootstrap";
import dashboardBackground from "src/assets/backgrounds/dashboard.gif";
import emptyPlayerProfilePicture from "src/assets/images/noplayerheadshot.png";
import { Layout } from "src/common";
import { useCurrentPlayerContext } from "src/hooks";

import styles from "./Dashboard.module.css";

/**
 * The dashboard component, houses the main display, and all the inputs as well.
 *
 * @returns Dashboard component
 */
export const Dashboard = (): JSX.Element => {
    const { player } = useCurrentPlayerContext();

    return (
        <Layout backgroundStyle={styles.dashboard_background}>
            <div className={styles.dashboard_content}>
                <div className={styles.dashboard_title}>
                    {"NBA Player SVM Dashboard"}
                </div>
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
                            src={
                                player === undefined
                                    ? emptyPlayerProfilePicture
                                    : emptyPlayerProfilePicture
                            }
                        />
                        <div className={styles.dashboard_player_general_info}>
                            {player === undefined
                                ? "No information available, please select a player."
                                : "No information available, please select a player."}
                        </div>
                    </div>
                    <div className={styles.dashboard_player_stats_content}>
                        <div className={styles.dashboard_player_stats_title}>
                            {"Player Statistics"}
                        </div>
                        <div className={styles.dashboard_player_statistics}>
                            {player === undefined
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
