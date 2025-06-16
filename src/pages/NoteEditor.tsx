import NotesHeader from '../components/NotesHeader';
import NotesTextArea from '../components/NotesTextArea';
import NotesPreview from '../components/NotesPreview';
import { useState } from 'react';
import type { Note } from './HomePage.tsx';
import './NoteEditor.css'

interface Props {
    children: Note;
}

export default function NoteEditor({ children: note }: Props) {
    const [title, setTitle] = useState(note.title);
    const [createdDate, setCreatedDate] = useState(note.createdDate);
    const [modifiedDate, setModifiedDate] = useState(note.modifiedDate);
    const [text, setText] = useState(note.content);
    const [showTextWindow, setShowTextWindow] = useState(true);
    const [showPreviewWindow, setShowPreviewWindow] = useState(true);

    return (
        <>
            <NotesHeader title={title} createdDate={createdDate} modifiedDate={modifiedDate} rawCallback={setShowTextWindow} formattedCallback={setShowPreviewWindow} />

            <div id="pane-holder">
                {showTextWindow && <NotesTextArea onChange={setText}>{text}</NotesTextArea>}
                {showPreviewWindow && <NotesPreview text={text} />}
            </div>
        </>
    );
}