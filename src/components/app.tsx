import * as React from "react";
import Toolbar from "./toolbar";
import NoteEditor from "./note_editor";
import NotesList from "./notes_list";
import useNotesDb from "../notes_hook";
import useFormInput from "../input_hook";

export default function App(props: any) {
    const notesDb = useNotesDb();
    const currentNoteText = useFormInput();

    const saveCurrentNote = () => {
        notesDb.add(currentNoteText.value);
    };
    return (
        <>
            <Toolbar id="toolbar"
                add={saveCurrentNote}
                remove={notesDb.remove} />
            <div id="app-pane">
                <NotesList id="notes-list"
                    notes={notesDb.notes} />
                <NoteEditor id="notes-editor" 
                    value={currentNoteText.value}
                    handleChange={currentNoteText.handleChange} />
            </div>
        </>
    )
}