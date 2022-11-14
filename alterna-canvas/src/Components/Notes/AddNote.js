import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 500;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
	};

	return (
		<div className='note new'>
            <br></br>
			<textarea
				rows='40'
				cols='100'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<medium>
					{characterLimit - noteText.length} Remaining
				</medium>
                <br></br>
                <br></br>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;