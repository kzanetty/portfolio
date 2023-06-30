import "./container.component.css"
import React from 'react';

export function ContainerComponent({ children, fullHeight }) {
    function fullHeightOrNot() {
        return fullHeight ? "container-full-height" : '';
    }

    return <div className={`container ${fullHeightOrNot()}`}>{children}</div>;
}