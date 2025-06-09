import './NotesTextArea.css';

function NotesTextArea() {
    return (
        <div className="notes-textarea">
            <textarea
                className="form-control"
                placeholder="Type your notes here..."
                rows={20}
                cols={1000}
                
            ></textarea>
            <div className="mb-3">
</div>
        </div>
        
    )
}

export default NotesTextArea;