import "./NotesPreview.css";
import Markdown from 'react-markdown';

interface Props {
  text: string;
}

export default function NotesPreview({text}: Props) {
  const lines: string[] = text.split('\n');

  const parsed = lines.map((line, index) => {
    return <Markdown>{line}</Markdown>;
  });

  return (
    <div id="notes-preview">
      {parsed}
    </div>
  );
}