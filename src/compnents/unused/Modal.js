function Modal({ isOpen, onClose, children }) {
	if (!isOpen) {
		return null;
	}

	return (
		<div className='modal-main' onClick={onClose}>
			<div className='modal-overlay'>
				<div className='modal-content' onClick={(e) => e.stopPropagation()}>
					{children}
					<button className='close-btn' onClick={onClose}>
						X
					</button>
				</div>
			</div>
		</div>
	);
}
export default Modal;
