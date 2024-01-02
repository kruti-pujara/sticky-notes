import React from 'react'
import Inputs from './compnents/Inputs';
import Header from './compnents/Header';
import NoteButton from './compnents/NoteButton';
import Board from './compnents/Board';
import Note from './compnents/Note';
function App() {
	return (
		<>
		<Header className="stick-notes-outer">
            <NoteButton>Add</NoteButton>
        </Header>
        <Board />
        <Note> 
            <Inputs />
            <NoteButton>Add </NoteButton>
        </Note>
		</>
	);
}
export default App;
