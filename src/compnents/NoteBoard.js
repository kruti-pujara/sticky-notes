import React from "react";

function NoteBoard({ notes }) {
	return (
		<div className='container'>
			<p>note board here</p>
			<p>{notes.title}</p>
			<p>{notes.content}</p>
		</div>
	);
}

export default NoteBoard;
