import React from "react";

function NoteBoard({ notes }) {
	const allNotes = notes;
	// console.log(allNotes);
	return (
		<div className='container'>
			<ul>
				{/* {allNotes.map((item) => ( */}
					<li>
						{/* <p>{item.title}</p> */}
						{/* <p>{item.content}</p> */}
					</li>
				{/* ))} */}
			</ul>
		</div>
	);
}

export default NoteBoard;
