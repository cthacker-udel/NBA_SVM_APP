/* eslint-disable @typescript-eslint/no-explicit-any -- disabled */
import React, { type ReactNode } from "react";

import styles from "./Layout.module.css";

type LayoutProperties = {
    backgroundImage?: any;
    children: ReactNode;
};

/**
 * The common layout component, which allows for all children to be wrapped properly
 *
 * @param props - The properties of the component
 * @param props.backgroundImage - The background image to apply to the layout
 * @param props.children - The ReactNode this HOC component "wraps"
 * @returns The layout applied to the child
 */
export const Layout = ({
    backgroundImage,
    children,
}: LayoutProperties): JSX.Element => (
    <div
        className={styles.layout_container}
        style={{ backgroundImage: `url(${backgroundImage})` }}
    >
        {children}
    </div>
);
