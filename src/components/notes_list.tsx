import React from "react";
import NoteService from "../notes_hook";
import Note from "../note";

export default function NotesList(props: any) {
    const note_elts = props.notes.map((note: Note) =>
        <div key={note.id}>
            {note.text}
        </div>
    );
    const returned = <div>{note_elts}</div>;
    return (
        <div id={props.id}>{note_elts}</div>
    );
}