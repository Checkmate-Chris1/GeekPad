import "./NotesPreview.css";

interface Props {
  text: string;
}

export default function NotesPreview({text}: Props) {
  const lines: string[] = text.split('\n');

  const parsed = lines.map((line, index) => {
    if (line.startsWith('# ')) {
      return (<h1>{line.slice(2)}</h1>);
    }

    return line;
  });

  return (
    <div id="notes-preview">
      {parsed}
    </div>
  );
}