import { useState } from 'react';
import './NotesHeader.css'

function NotesHeader() {
    const [title, setTitle] = useState('Lorem Ipsum');
    const [createdDate, setCreatedDate] = useState('6/4/2025');
    const [modifiedDate, setModifiedDate] = useState('6/4/2025');

    return (
        <div id="notes-header">
            <div className="header-info">
                <div id="metadata-info">
                    <span className="metadata-item">Title: {title}</span>
                    <span className="metadata-item">Created: {createdDate}</span>
                    <span className="metadata-item">Modified: {modifiedDate}</span>
                </div>
                <button onClick={() => alert('Register functionality not implemented yet!')}>Login/Register</button>
            </div>
        </div>
    );
}

export default NotesHeader;