import PropTypes from "prop-types";
import {FiStar, FiTrash2} from "react-icons/fi";

function NotesItemButton({id, onDelete, onAchieve, archived}) {
    return (
        <div className="notes-item-button">
            <button className={`notes-item-button__achieve ${archived ? 'archived' : ''}`}  onClick={() => onAchieve(id)}><FiStar/></button>
            <button className="notes-item-button__delete" onClick={() => onDelete(id)}><FiTrash2/></button>
        </div>
    );
}

NotesItemButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onAchieve: PropTypes.func.isRequired,
    archived: PropTypes.bool.isRequired,
};

export default NotesItemButton;
