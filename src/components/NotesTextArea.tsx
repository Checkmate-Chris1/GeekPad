import './NotesTextArea.css';

interface Props {
    text: string;
    onChange: (text: string) => void;
}

export default function NotesTextArea({text, onChange: setText}: Props) {
    return (
        <div id="notes-textarea">
            <textarea className="form-control" placeholder="Type your notes here..." 
            value={text} onChange={e => {setText(e.target.value)}} />
        </div>
        
    )
}