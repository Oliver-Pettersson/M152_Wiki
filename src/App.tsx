import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Container } from "@mui/material";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import VideoPage from "./components/pages/VideoPage/VideoPage";
import SoftwareLibraryPage from "./components/pages/SoftwareLibraryPage/SoftwareLibraryPage";

function App() {
  return (
    <div className="overflow-x-hidden w-full">
      <Container className="pt-12">
        <BrowserRouter>
        <ResponsiveAppBar />
          <Routes>
            <Route path="/*" element={<VideoPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/software-evaluation" element={<SoftwareLibraryPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
