import './NotesHeader.css';

interface Props {
    title: string;
    createdDate: string;
    modifiedDate: string;
    rawCallback: (value: boolean) => void;
    formattedCallback: (value: boolean) => void;
}

export default function NotesHeader({ title, createdDate, modifiedDate, rawCallback, formattedCallback }: Props) {

    return (
        <div id="notes-header">
            <div className="header-info">
                <div id="metadata-info">
                    <span className="metadata-item"><strong>Title: {title}</strong></span>
                    <span className="metadata-item">Created: {createdDate}</span>
                    <span className="metadata-item">Modified: {modifiedDate}</span>
                </div>
                <div className="doc-options">
                    <button style={{fontFamily: 'Times New Roman'}} className="btn btn-secondary"><strong>B</strong></button>
                    <button style={{fontFamily: 'Times New Roman'}} className="btn btn-secondary"><i>I</i></button>
                    <button style={{fontFamily: 'Times New Roman', textDecoration: 'underline'}} className="btn btn-secondary">U</button>
                </div>
                <button id="login-button" className="btn btn-primary" onClick={() => alert('Register functionality not implemented yet!')}>Login/Register</button>
            </div>

            <div className="header-info">
                <form className="doc-options">
                    <div className="form-check">
                        <input id="raw-text-check" className="form-check-input" type="checkbox" value="" onChange={e => {rawCallback(e.target.checked)}} defaultChecked />
                        <label className="form-check-label" htmlFor="raw-text-check">Raw Text Window</label>
                    </div>
                    <div className="form-check">
                        <input id="formatted-text-check" className="form-check-input" type="checkbox" value="" onChange={e => {formattedCallback(e.target.checked)}} defaultChecked />
                        <label className="form-check-label" htmlFor="formatted-text-check">Formatted Text Window</label>
                    </div>
                </form>
                <div className="doc-options">
                    <button type="button" className="btn btn-outline-light">Copy</button>
                    <button type="button" className="btn btn-outline-primary">Edit</button>
                    <button type="button" className="btn btn-outline-danger">Delete</button>
                </div>
            </div>
        </div>
    );
}