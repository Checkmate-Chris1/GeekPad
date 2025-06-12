import NotesHeader from '../components/NotesHeader';
import NotesTextArea from '../components/NotesTextArea';
import NotesPreview from '../components/NotesPreview';
import { useEffect, useState } from 'react';
import './NoteEditor.css'

export default function NoteEditor() {
    const [title, setTitle] = useState('Lorem Ipsum');
    const [createdDate, setCreatedDate] = useState('6/4/2025');
    const [modifiedDate, setModifiedDate] = useState('6/4/2025');
    const [text, setText] = useState('');
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