import {Link, useLocation} from "react-router-dom";
import {FiX, FiEdit, FiHome, FiMenu, FiSearch, FiMeh} from "react-icons/fi";
import {useState} from "react";

function NotesSidebar() {
    const location = useLocation();
    const [searchActive, setSearchActive] = useState(false);
    const [sidebarActive, setSidebarActive] = useState(false);

    return (<>
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

            <div className="note-header">
                <div className="note-header__component">
                    <button onClick={() => setSidebarActive(!sidebarActive)}>
                        <FiMenu className="icon"/>
                    </button>
                    <button className={`button ${location.pathname === '/create' ? 'none' : ''}`} onClick={() => setSearchActive(!searchActive)}>
                        <FiSearch className="icon"/>
                    </button>
                    <input
                        className={`search-input ${searchActive ? 'active' : ''}`}
                        type="text"
                        placeholder="Search..."
                    />
                </div>
            </div>
        </>

    );
}

export default NotesSidebar;
