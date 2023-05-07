import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import React from "react";
import Navbar from "./components/organisms/Navbar/Navbar";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import VideoPage from "./components/pages/VideoPage/VideoPage";
import SoftwareLibraryPage from "./components/pages/SoftwareLibraryPage/SoftwareLibraryPage";
import MediaCodexPage from "./components/pages/MediaCodexPage/MediaCodexPage";
import SaschasPage from "./components/pages/SaschasPage/SaschasPage";
import Footer from "./components/organisms/Footer/Footer";
import DockerVideo from "./components/organisms/VideoDetail/docker/DockerVideo";
import SEOPage from "./components/organisms/VideoDetail/SEO/SEOPage";
import ReactVideo from "./components/organisms/VideoDetail/React/ReactVideo";

function App() {
    return (
        <div className="overflow-x-hidden w-full h-full">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/*" element={<VideoPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/software-library" element={<SoftwareLibraryPage/>}/>
                    <Route path="/media-codex" element={<MediaCodexPage/>}/>
                    {/* Learn video pages below */}
                    <Route path="/videos/docker" element={<DockerVideo/>}/>
                    <Route path="/videos/seo" element={<SEOPage/>}/>
                    <Route path="/videos/react" element={<ReactVideo/>}/>
                    <Route path="/videos/ai" element={<SaschasPage/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
