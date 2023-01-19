import React from "react";
import { Button, Image } from "react-bootstrap";
import analyticsGif from "src/assets/backgrounds/homepage.gif";
import spinningBasketball from "src/assets/gifs/spinning_basketball.gif";

import { Layout } from "../../common";
import styles from "./Home.module.css";

/**
 * The home page component, where the user lands when starting the app and exiting the app
 *
 * @returns Home page
 */
export const Home = (): JSX.Element => (
    <Layout backgroundImage={analyticsGif}>
        <div className={styles.home_page_content}>
            <div className={styles.home_page_title}>
                <Image
                    className={styles.home_page_title_icon}
                    src={spinningBasketball}
                />
                <span>{"Welcome to the NBA Tracker Application!"}</span>
                <Image
                    className={styles.home_page_title_icon}
                    src={spinningBasketball}
                />
            </div>
            <div className={styles.home_page_description}>
                {
                    "This is an application for testing my knowledge of the ML topics I have been learning so far. We will be using the SVM model to predict a target, given proper prediction data. The backend will be entirely in python for ease of backend use, and will be fetching from nba api to pull player data as well. It will have a fully functional front-end, and pulling live data to populate the GUI."
                }
            </div>
            <div className={styles.home_page_button_bar}>
                <Button variant="secondary">
                    {"Enter the NBA Tracker App!"}
                </Button>
            </div>
        </div>
    </Layout>
);
