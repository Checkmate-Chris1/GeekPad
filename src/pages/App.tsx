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

    return (
        <>
            { !noteSelected && <HomePage loadNote={(note: Note) => {
                setNoteSelected(true);
                setNoteMetadata(note);
            }} /> }
            { noteSelected && <NoteEditor note={noteMetadata} /> }
        </>
    );
}