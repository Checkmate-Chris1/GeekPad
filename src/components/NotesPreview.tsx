import "./NotesPreview.css";

interface Props {
  text: string;
}

export default function NotesPreview({text}: Props) {
  const lines: string[] = text.split('\n');

  const parsed = lines.map((line, index) => {
    return parseMarkdownLine(line);
  });

  return (
    <div id="notes-preview">
      {parsed}
    </div>
  );
}

function parseMarkdownLine(line: string) {
  if(line == '') {
    return (<br />);
  } else if (line.startsWith('# ')) {
    return (<h1>{line.slice(2)}</h1>);
  } else if (line.startsWith('## ')) {
    return (<h2>{line.slice(3)}</h2>);  
  } else if (line.startsWith('### ')) {
    return (<h3>{line.slice(4)}</h3>);
  } else if (line.startsWith('#### ')) {
    return (<h4>{line.slice(5)}</h4>);
  } else if (line.startsWith('##### ')) {
    return (<h5>{line.slice(6)}</h5>);
  } else if (line.startsWith('###### ')) {
    return (<h6>{line.slice(7)}</h6>);
  } else if (line.match('---')) {
    return (<hr />);
  } else if( line.startsWith('> ')) {
    return (<blockquote>{line.slice(2)}</blockquote>);
  } else if (line.startsWith('* ') || line.startsWith('- ')) {
    return (<ul><li>{line.slice(2)}</li></ul>);
  } else if (line.startsWith('1. ')) {
    return (<ol><li>{line.slice(3)}</li></ol>); // ordered list, work-in-progress
  } else if (line.startsWith('`') && line.endsWith('`')) {
    return (<code>{line.slice(1, -1)}</code>);
  } else if (line.startsWith('**') && line.endsWith('**')) {
    return (<strong>{line.slice(2, -2)}</strong>);
  } else if (line.startsWith('*') && line.endsWith('*')) {
    return (<p><em>{line.slice(1, -1)}</em></p>);
  } else {
    return (<p>{line}</p>);
  }
}