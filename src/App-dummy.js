import React, { useState } from "react";
import "./StickyNote.css";

const StickyNote = ({ note, onDelete }) => {
	return (
		<div className='sticky-note'>
			<p>{note}</p>
			<button onClick={onDelete}>Delete</button>
		</div>
	);
};

const StickyNoteApp = () => {
	const [notes, setNotes] = useState([]);
	const [newNote, setNewNote] = useState("");

	const addNote = () => {
		if (newNote.trim() !== "") {
			setNotes([...notes, newNote]);
			setNewNote("");
		}
	};

	const deleteNote = (index) => {
		const updatedNotes = [...notes];
		updatedNotes.splice(index, 1);
		setNotes(updatedNotes);
	};

	return (
		<div className='sticky-note-app'>
			<h1>Sticky Note App</h1>
			<div className='input-container'>
				<textarea
					rows='4'
					cols='50'
					placeholder='Enter your note'
					value={newNote}
					onChange={(e) => setNewNote(e.target.value)}></textarea>
				<button onClick={addNote}>Add Note</button>
			</div>

			<div className='notes-container'>
				{notes.map((note, index) => (
					<StickyNote
						key={index}
						note={note}
						onDelete={() => deleteNote(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default StickyNoteApp;
