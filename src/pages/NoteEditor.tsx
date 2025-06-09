import NotesHeader from '../components/NotesHeader';
import NotesTextArea from '../components/NotesTextArea';
// import NotesPreview from '../components/NotesPreview';
import './NoteEditor.css'

function noteEditor() {
    return (
        <>
            <NotesHeader />

            <div id="pane-holder">
                <NotesTextArea />
                <NotesTextArea /> {/* <NotesPreview /> */}
            </div>
        </>
    );
}

export default noteEditor;