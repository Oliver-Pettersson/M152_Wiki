import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Container } from "@mui/material";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import VideoPage from "./components/pages/VideoPage/VideoPage";

function App() {
  return (
    <div className="overflow-x-hidden h-full w-full">
        <BrowserRouter>
        <ResponsiveAppBar />
        <Container className="pt-12">
          <Routes>
            <Route path="/*" element={<VideoPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          </Container>
        </BrowserRouter>
    </div>
  );
}

export default App;
