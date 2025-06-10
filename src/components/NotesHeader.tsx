import './NotesHeader.css';

interface Props {
    title: string;
    createdDate: string;
    modifiedDate: string;
}

export default function NotesHeader({ title, createdDate, modifiedDate }: Props) {

    return (
        <div id="notes-header">
            <div className="header-info">
                <div id="metadata-info">
                    <span className="metadata-item"><strong>Title: {title}</strong></span>
                    <span className="metadata-item">Created: {createdDate}</span>
                    <span className="metadata-item">Modified: {modifiedDate}</span>
                </div>
                <button id="login-button" className="btn btn-primary" onClick={() => alert('Register functionality not implemented yet!')}>Login/Register</button>
            </div>

            <div className="header-info">
                <form className="doc-options">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" defaultChecked />
                        <label className="form-check-label" htmlFor="checkChecked">Raw Text Window</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" defaultChecked />
                        <label className="form-check-label" htmlFor="checkChecked">Formatted Text Window</label>
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