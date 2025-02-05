import {Component} from "react";
import NotesList from "../component/NotesList.jsx";
import {getNotes, deleteNote, archiveNote, unArchiveNote, filterNotes} from "../utils/data.js";
import NotesHeader from "../component/NotesHeader.jsx";
import NotesFilter from "../component/NotesFilter.jsx";
import NotesSidebar from "../component/NotesSidebar.jsx";
import {useSearchParams} from "react-router-dom";
import PropTypes from "prop-types";

function HomeWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const defaultKeyword = searchParams.get("keyword") || "";
    const defaultFilter = searchParams.get("filter") || "all";

    const updateSearchParams = (keyword, filter) => {
        const params = new URLSearchParams();
        if (keyword) params.set("keyword", keyword);
        if (filter) params.set("filter", filter);
        setSearchParams(params);
    };

    return (
        <HomePage
            defaultKeyword={defaultKeyword}
            defaultFilter={defaultFilter}
            updateSearchParams={updateSearchParams}
        />
    );
}

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: props.defaultKeyword || "",
            filterActive: props.defaultFilter || "all",
            searchActive: false,
            sidebarActive: false,
            notes: getNotes(),
        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete = (noteId) => {
        deleteNote(noteId);
        this.setState({notes: getNotes()});
    };

    handleArchive = (noteId, archived) => {
        if (archived) {
            unArchiveNote(noteId);
        } else {
            archiveNote(noteId);
        }
        this.setState({notes: getNotes()});
    };

    toggleSidebar = () => {
        this.setState((prevState) => ({sidebarActive: !prevState.sidebarActive}));
    };

    setSearchQuery = (query) => {
        this.setState({searchQuery: query});
    };

    setFilterActive = (filter) => {
        this.setState({filterActive: filter});
    };

    setSearchActive = (active) => {
        this.setState({searchActive: active});
    };

    render() {
        const {searchQuery, filterActive, searchActive, sidebarActive, notes} = this.state;
        const filteredNotes = filterNotes(notes, filterActive).filter((note) =>
            note.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (
            <div className="home-page">
                <NotesSidebar sidebarActive={sidebarActive} toggleSidebar={this.toggleSidebar}/>
                <div className="note-layout">
                    <NotesHeader
                        searchActive={searchActive}
                        setSearchActive={this.setSearchActive}
                        searchQuery={searchQuery}
                        setSearchQuery={this.setSearchQuery}
                        toggleSidebar={this.toggleSidebar}
                    />
                    <NotesFilter filterActive={filterActive} setFilterActive={this.setFilterActive}/>
                    <div className="note-body">
                        <NotesList notes={filteredNotes} onDelete={this.handleDelete} onArchive={this.handleArchive}/>
                    </div>
                </div>
            </div>
        );
    }
}

HomePage.propTypes = {
    defaultKeyword: PropTypes.string.isRequired,
    defaultFilter: PropTypes.string.isRequired,
    updateSearchParams: PropTypes.func.isRequired,
};

export default HomeWrapper;
