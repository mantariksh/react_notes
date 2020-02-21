import React, { useState } from "react";
import Note from "./note";

export default function useNotesDb() {
    const initialNotes: Note[] = [];
    const [notes, setNotes] = useState(initialNotes);

    function add(newNote: string) {
        setNotes([
            { 
                id: notes.length,
                date: new Date(),
                text: newNote
            },
            ...notes]
        );
    }

    function remove(id: number) {
        setNotes(notes.filter(note => note.id !== id));
    }

    function update(id: number, newNote: string) {
        setNotes(notes.filter(note => note.id !== id));
        setNotes([
            { 
                id: id,
                date: new Date(),
                text: newNote
            },
            ...notes]
        );
    }

    return { notes, add, remove };
}