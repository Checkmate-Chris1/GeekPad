function NotesTextArea() {
    return (
        <div className="notes-textarea">
            <textarea
                className="notes-input"
                placeholder="Type your notes here..."
                rows={10}
                cols={50}
            ></textarea>
        </div>
    )
}

export default NotesTextArea;