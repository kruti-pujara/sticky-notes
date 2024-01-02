import { useState } from "react";

function Notes({ onAddNote}) {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	function handleAdd(e) {
		e.preventDefault();
		if (!title && !content) {
			alert("please add title and content");
		}
		const newNote = { title, content, id:Date.now() };
		onAddNote(newNote);
		setTitle("");
		setContent("");
	}
	return (
		<>
			<textarea
				placeholder='add note title!'
				className='note-title'
				onChange={(e) => setTitle(e.target.value)}
				value={title}></textarea>
			<textarea
				placeholder='add content'
				className='note-content'
				onChange={(e) => setContent(e.target.value)}
				value={content}></textarea>
			<button className='add-note' onClick={handleAdd}>
				Add
			</button>
		</>
	);
}
export default Notes;
