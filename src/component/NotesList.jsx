import NotesItem from "./NotesItem.jsx";
import PropTypes from "prop-types";

function NotesList({notes, onDelete, onAchieve}) {
    return (
        <div className="notes-list">
            {
                notes.length > 0 ? (
                    notes.map((note) => (
                        <NotesItem
                            key={note.id}
                            id={note.id}
                            onDelete={onDelete}
                            onAchieve={onAchieve}
                            archived={note.archived}
                            {...note} />
                    ))
                ) : (
                    <p className="notes-list__empty">No active notes found.</p>
                )
            }
        </div>
    );
}

NotesList.propTypes = {
    notes: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onAchieve: PropTypes.func.isRequired,
};

export default NotesList;
