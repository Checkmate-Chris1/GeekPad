function NotesHeader() {
    return (
        <header className="notes-header">
            <h1>GeekPad</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/notes">Notes</a></li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NotesHeader;