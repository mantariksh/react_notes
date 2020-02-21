import React from "react";

export default function DateDisplay(props: any) {
    return (
        <div>
            {props.displayDate.toLocaleDateString() + " " +
             props.displayDate.toLocaleTimeString()}
        </div>
    );
}