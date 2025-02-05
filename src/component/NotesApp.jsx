import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import CreatePage from "../pages/CreatePage.jsx";

function NotesApp() {
    return (
        <div className="note-app">
            <Routes>
                <Route path="/" element={
                    <HomePage/>
                }/>
                <Route path="/create" element={
                    <CreatePage/>
                }/>
                <Route path="/notes/:id" element={
                    <p>Detail</p>
                }/>
            </Routes>
        </div>
    );
}

export default NotesApp;
