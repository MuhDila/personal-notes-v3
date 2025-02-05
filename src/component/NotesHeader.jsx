import {FiMenu, FiSearch} from "react-icons/fi";
import PropTypes from "prop-types";

function NotesHeader({searchActive, setSearchActive, searchQuery, setSearchQuery, toggleSidebar}) {
    return (
        <div className="note-header">
            <button onClick={toggleSidebar}>
                <FiMenu className="icon"/>
            </button>
            <button className={`button`} onClick={() => setSearchActive(!searchActive)}>
                <FiSearch className="icon"/>
            </button>
            <input
                className={`search-input ${searchActive ? 'active' : ''}`}
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
}

NotesHeader.propTypes = {
    searchActive: PropTypes.bool.isRequired,
    setSearchActive: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};

export default NotesHeader;
