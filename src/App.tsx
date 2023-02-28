import './App.css'
import React from "react";
import {Box, createTheme, IconButton, ThemeProvider, useTheme} from "@mui/material";
import {BsFillMoonStarsFill, BsSun} from "react-icons/all";
import VideoDetail from './pages/VideoDetail';


function App() {

    return (
        <>
            <div className="flex-1">
                <VideoDetail/>
            </div>
        </>
    )
}

export default App
