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

    return (
        <>
            <NotesHeader title={title} createdDate={createdDate} modifiedDate={modifiedDate} />

            <div id="pane-holder">
                <NotesTextArea />
                <NotesPreview />
            </div>
        </>
    );
}