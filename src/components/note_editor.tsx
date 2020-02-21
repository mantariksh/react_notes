import React from "react";
import DateDisplay from "./date_display";

export default function NoteEditor(props: any) {
    return (
        <div id={props.id}>
            <DateDisplay displayDate={new Date()} />
            <textarea 
                id={props.id}
                value={props.value}
                onChange={props.handleChange}
            />
        </div>
    )
}