import React from "react";
import NoteService from "../notes_hook";

export default function Toolbar(props: any) {
    const addBtn = 
        <button onClick={props.add}>+</button>;
    return (
        <div id={props.id}>
            {addBtn}
        </div>
    );
}