import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note' style={{width: "800px", background: "#74cafc",borderRadius: "10px", margin: "10px", padding: "10px"}}>
			<strong>{text}</strong>
			<div className='note-footer'style={{fontStyle: "italic"}}>
				<small style={{color: "#535454"}}><b>{date}</b></small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;