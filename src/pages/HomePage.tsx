import './HomePage.css';

export interface Note {
    title: string;
    createdDate: string;
    modifiedDate: string;
    content: string;
}

const notes: Note[] = [
    {
        title: "Note 1",
        createdDate: "2023-01-01",
        modifiedDate: "2023-01-02",
        content: "This is a short description of Note 1"
    },
    {
        title: "Note 2",
        createdDate: "2023-01-03",
        modifiedDate: "2023-01-04",
        content: "# Header\n## Subtitle\nThis is a long description with subtitle stuff. Cool!"
    },
    {
        title: "Note 3",
        createdDate: "2023-01-05",
        modifiedDate: "2023-01-06",
        content: "**Here** is the markdown capability.\nLine break just happened, `isn't that cool?`"
    },
    {
        title: "Note 4",
        createdDate: "2023-01-07",
        modifiedDate: "2023-01-08",
        content: "This is a long description of Note 4. It should be truncated in the list view but show the full content when clicked."
    }
];

export default function HomePage({onLoad: loadNote}: {onLoad: (note: Note) => void}) {

    return (
        <>
            <div id="header">
                <textarea placeholder="Search..."></textarea>
                <button id="login-button" className="btn btn-primary" onClick={() => alert('Register functionality not implemented yet!')}>Login/Register</button>
            </div>
            <div id="note-container">
                {notes.map((note, index) => (
                    <button key={index} className="note" onClick={() => loadNote(note)}>
                        <h2>{note.title}</h2>
                        <h6>Created: {note.createdDate}</h6>
                        <h6>Modified: {note.modifiedDate}</h6>
                        <p>{note.content.length > 30 ? note.content.substring(0,50) + "..." : note.content}</p>
                    </button>
                ))}
            </div>
        </>
    );
}