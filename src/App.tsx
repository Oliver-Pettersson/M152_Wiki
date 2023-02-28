import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import React from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import VideoPage from "./components/pages/VideoPage/VideoPage";
import VideoDetail from "./components/pages/VideoDetail";
import SoftwareLibraryPage from "./components/pages/SoftwareLibraryPage/SoftwareLibraryPage";

function App() {
    return (
        <div className="overflow-x-hidden w-full">
            <div className="pt-12">
                <BrowserRouter>
                    <ResponsiveAppBar/>
                    <Routes>
                        <Route path="/*" element={<VideoPage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="/software-library" element={<SoftwareLibraryPage/>}/>
                        <Route path="/video" element={<VideoDetail />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
