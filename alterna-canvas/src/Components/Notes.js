import React, {useState, useEffect} from "react";
import { nanoid } from 'nanoid';
import NotesList from './Notes/NotesList';

function Notes() {

  const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'Fall Semester has begun! AlternaCanvas Notes and Reminders is cool!',
			date: 'Created: 9/23/2022',
		},
    {
			id: nanoid(),
			text: 'Computer Graphics: Lectures 3-9 will be on midterm, need to make plan to start studying!',
			date: 'Created: 10/24/2022',
		},
    {
			id: nanoid(),
			text: 'Senior Design: Review Design with Professor -  Approvals needed for project',
			date: 'Created: 11/10/2022',
		},
    {
			id: nanoid(),
			text: 'User Interface: Project 2 deadlines changed. Delayed by 1 week',
			date: 'Created: 11/13/2022',
		},
	]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: "Created: " + date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h4 style={{background: "#d4e8fc",borderRadius: "10px", borderColor: "black", padding: "20px"}}><b>Current Notes & Reminders</b></h4>
        <br></br>
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
        <br></br>
			</div>
		</div>
	);
}

export default Notes;