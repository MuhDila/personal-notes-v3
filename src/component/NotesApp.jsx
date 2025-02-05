import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import CreatePage from "../pages/CreatePage.jsx";
import DetailPageWrapper from "../pages/DetailPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";

function NotesApp() {
    return (
        <div className="note-app">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/create" element={<CreatePage/>}/>
                <Route path="/notes/:id" element={<DetailPageWrapper/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
}

export default NotesApp;
