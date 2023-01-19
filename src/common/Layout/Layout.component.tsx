/* eslint-disable @typescript-eslint/no-explicit-any -- disabled */
import React, { type ReactNode } from "react";

import styles from "./Layout.module.css";

type LayoutProperties = {
    backgroundColor?: string;
    backgroundImage?: any;
    backgroundStyle?: any;
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
    backgroundColor,
    backgroundImage,
    backgroundStyle,
    children,
}: LayoutProperties): JSX.Element => (
    <div
        className={`${styles.layout_container} ${backgroundStyle}`}
        style={{
            backgroundColor:
                backgroundColor === undefined ? undefined : backgroundColor,
            backgroundImage:
                backgroundImage === undefined
                    ? undefined
                    : `url(${backgroundImage})`,
        }}
    >
        {children}
    </div>
);
