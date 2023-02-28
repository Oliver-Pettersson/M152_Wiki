import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Container } from "@mui/material";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import VideoPage from "./components/pages/VideoPage/VideoPage";
import VideoDetail from "./components/pages/VideoDetail";

function App() {
  return (
    <div className="overflow-x-hidden w-fit">
      <Container className="pt-12">
        <BrowserRouter>
        <ResponsiveAppBar />
          <Routes>
            <Route path="/*" element={<VideoPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/video" element={<VideoDetail />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
