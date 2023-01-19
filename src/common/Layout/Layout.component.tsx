import React, { type ReactNode } from "react";

import styles from "./Layout.module.css";

type LayoutProperties = {
    children: ReactNode;
};

/**
 * The common layout component, which allows for all children to be wrapped properly
 *
 * @param props - The properties of the component
 * @param props.children - The ReactNode this HOC component "wraps"
 * @returns The layout applied to the child
 */
export const Layout = ({ children }: LayoutProperties): JSX.Element => (
    <div className={styles.layout_container}>{children}</div>
);
