import Notes from "./compnents/Notes";
import Modal from "./compnents/Modal";
import { useState } from "react";
function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	function openModal() {
		setIsModalOpen(true);
	}
	function closeModal() {
		setIsModalOpen(false);
	}
	return (
		<section className='sticky-notes-section'>
			<div className='container'>
				<div className='stick-notes-outer'>
					<h1>Lets create Notes!</h1>
					<button className='site-btn' onClick={openModal}>
						Add note
					</button>
					<Modal isOpen={isModalOpen} onClose={closeModal}>
						<Notes />
					</Modal>
				</div>
			</div>
		</section>
	);
}

export default App;
