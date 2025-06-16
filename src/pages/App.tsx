import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import NoteEditor from './NoteEditor.tsx'
import HomePage, { type Note } from './HomePage.tsx'

export default function App() {
    const [noteSelected, setNoteSelected] = useState(false);
    const [noteMetadata, setNoteMetadata] = useState<Note>({
        title: "",
        createdDate: "",
        modifiedDate: "",
        content: ""
    });

    const loadNote = (note: Note) => {
                setNoteSelected(true);
                setNoteMetadata(note);
    }

    return (
        <>
            { !noteSelected && <HomePage onLoad={loadNote} /> }
            { noteSelected && <NoteEditor>{noteMetadata}</NoteEditor> }
        </>
    );
}