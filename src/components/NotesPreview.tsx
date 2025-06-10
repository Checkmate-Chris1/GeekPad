import "./NotesPreview.css";

export default function NotesPreview() {
  return (
    <div id="notes-preview">
      <h1>Notes Preview</h1>
      <p>{document.getElementById("notes-textarea")?.innerText}</p>
    </div>
  );
}