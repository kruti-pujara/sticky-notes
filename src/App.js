import Modal from "./compnents/Modal";
import { useState } from "react";
import NoteBoard from "./compnents/NoteBoard";
import Notes from "./compnents/Notes";
function App() {
	const [notes, setNotes] = useState("");
	console.log(notes);
	function handleAddNote(note) {
		setNotes((notes) => [...notes, note]);
		console.log(notes);
	}
	const [isModalOpen, setIsModalOpen] = useState(false);
	function openModal() {
		setIsModalOpen(true);
	}
	function closeModal() {
		setIsModalOpen(false);
	}
	return (
		<>
			<section className='sticky-notes-section'>
				<div className='container'>
					<div className='stick-notes-outer'>
						<h1>Lets create Notes!</h1>
						<button className='site-btn' onClick={openModal}>
							Add note
						</button>
						<Modal isOpen={isModalOpen} onClose={closeModal}>
							<Notes onAddNote={handleAddNote} />
						</Modal>
					</div>
				</div>
			</section>
			<section>
				<NoteBoard notes={notes} />
			</section>
		</>
	);
}

export default App;
