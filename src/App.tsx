import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import React from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import VideoPage from "./components/pages/VideoPage/VideoPage";
import SoftwareLibraryPage from "./components/pages/SoftwareLibraryPage/SoftwareLibraryPage";
import VideoDetail from "./components/pages/VideoDetail";

function App() {
    return (
        <div className="overflow-x-hidden w-full h-full">
                <BrowserRouter>
                    <ResponsiveAppBar/>
                    <Routes>
                        <Route path="/*" element={<VideoPage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="/software-library" element={<SoftwareLibraryPage/>}/>
                        <Route path="/videos/detail" element={<VideoDetail/>}/>
                    </Routes>
                </BrowserRouter>
        </div>
    );
}

export default App;
