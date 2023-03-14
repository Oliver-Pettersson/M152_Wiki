import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Navbar from "./components/organisms/Navbar/Navbar";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import VideoPage from "./components/pages/VideoPage/VideoPage";
import SoftwareLibraryPage from "./components/pages/SoftwareLibraryPage/SoftwareLibraryPage";
import VideoDetail from "./components/organisms/VideoDetail/VideoDetail";
import Footer from "./components/organisms/Footer/Footer";

function App() {
    return (
        <div className="overflow-x-hidden w-full h-full">
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path="/*" element={<VideoPage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="/software-library" element={<SoftwareLibraryPage/>}/>
                        <Route path="/videos" element={<VideoDetail/>}/>
                    </Routes>
                </BrowserRouter>
                <Footer/>
        </div>
    );
}

export default App;
