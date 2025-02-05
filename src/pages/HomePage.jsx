import {FiCloud, FiCloudOff, FiEdit, FiHome, FiList, FiMeh, FiMenu, FiSearch, FiX} from "react-icons/fi";
import {Link, useLocation} from "react-router-dom";
import {useState} from "react";
import NotesList from "../component/NotesList.jsx";
import {filterNotes, getNotes} from "../utils/data.js";

function HomePage() {
    const location = useLocation();
    const [searchActive, setSearchActive] = useState(false);
    const [sidebarActive, setSidebarActive] = useState(false);
    const [filterActive, setFilterActive] = useState("all");

    const notes = filterNotes(getNotes(), filterActive);

    return (
        <div className="home-page">
            <div className={`note-sidebar ${sidebarActive ? 'active' : ''}`}>
                <div className="note-sidebar__header">
                    <h1>Personal Notes</h1>
                    <FiMeh className="icon-meh"/>
                    <button onClick={() => setSidebarActive(!sidebarActive)}>
                        <FiX className="icon"/>
                    </button>
                </div>
                <nav className="note-sidebar-nav">
                    <Link to="/" className={`sidebar-link ${location.pathname === '/' ? 'active' : ''}`}>
                        <span>
                            <FiHome className="icon"/> <span className="icon-name">Modern</span>
                        </span>
                    </Link>
                    <Link to="/create" className={`sidebar-link ${location.pathname === '/create' ? 'active' : ''}`}>
                        <span>
                            <FiEdit className="icon"/> <span className="icon-name">Create</span>
                        </span>
                    </Link>
                </nav>
            </div>

            <div className="note-layout">
                <div className="note-header">
                    <button onClick={() => setSidebarActive(!sidebarActive)}>
                        <FiMenu className="icon"/>
                    </button>
                    <button className={`button ${location.pathname === '/create' ? 'none' : ''}`}
                            onClick={() => setSearchActive(!searchActive)}>
                        <FiSearch className="icon"/>
                    </button>
                    <input
                        className={`search-input ${searchActive ? 'active' : ''}`}
                        type="text"
                        placeholder="Search..."
                    />
                </div>

                <div className="note-filter">
                    <button className={`note-filter__button ${filterActive === "all" ? "active" : ""}`}
                            onClick={() => setFilterActive("all")}>
                        <FiList className="icon"/> <span>All Notes</span>
                    </button>
                    <button className={`note-filter__button ${filterActive === "archived" ? "active" : ""}`}
                            onClick={() => setFilterActive("archived")}>
                        <FiCloud className="icon"/> <span>Archived</span>
                    </button>
                    <button className={`note-filter__button ${filterActive === "unarchived" ? "active" : ""}`}
                            onClick={() => setFilterActive("unarchived")}>
                        <FiCloudOff className="icon"/> <span>Unarchived</span>
                    </button>
                </div>

                <div className="note-body">
                    <NotesList
                        notes={notes}
                        onDelete={null}
                        onAchieve={null}
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
