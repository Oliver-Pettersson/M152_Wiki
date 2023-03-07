import { Typography } from "@mui/material";
import { Container } from "@mui/material";

import React from 'react'
import StoryBoardItem from "../../../StoryBoardItem";
import "./VideoPage_template.css";

function VideoDetail() {
    return (
        <>
            <div className="page-container w-full">

                <div className="title-wrapper">
                    <Typography variant="h1" className="title">Docker leicht gemacht</Typography>
                    <div className="point"/>
                </div>

                <div className="video-description">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sed provident inventore ipsa sapiente quos, officiis molestias temporibus exercitationem ipsam.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus doloribus itaque, nihil reiciendis in ea culpa aliquid! Commodi, natus quam.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sed provident inventore ipsa sapiente quos, officiis molestias temporibus exercitationem ipsam.
                    </p>
                </div>

                <div className="main-content grid grid-rows-2 grid-flow-col">
                    <iframe
                        className="video-thumbnail row-span-2 col-span-2"
                        src={`https://www.youtube.com/embed/rf8YebDBcbY`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                    <Typography className="video-thumbnail-description row-span-2 col-span-1">
                        In this weeks video we take a dive into the inner workings of Docker!
                    </Typography>
                </div>

                {/* Story boards below  */}
                <div className="divider"></div>

                <div className="storyboard-title-wrapper">
                    <Typography variant="h3">Story Board</Typography>
                </div>

                <div>
                    <StoryBoardItem isOnLeftSide={true}/>
                    <StoryBoardItem isOnLeftSide={false}/>
                    <StoryBoardItem isOnLeftSide={true}/>
                </div>
            </div>
        </>
    )
}

export default VideoDetail