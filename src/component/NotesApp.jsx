import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";

function NotesApp() {
    return (
        <div className="note-app">
            <Routes>
                <Route path="/" element={
                    <HomePage/>
                }/>
                <Route path="/create" element={
                    <p>Create</p>
                }/>
                <Route path="/notes/:id" element={
                    <p>Detail</p>
                }/>
            </Routes>
        </div>
    );
}

export default NotesApp;
