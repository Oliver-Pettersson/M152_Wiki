import { Typography } from "@mui/material";
import { Container } from "@mui/material";

import React from 'react'
import StoryBoardItem from "../StoryBoardItem";

function VideoDetail() {
    return (
        <>
            <Container className="flex-1 bg-orange-400 w-full m-4">
                <div className="bg-green-400">
                    <Typography variant="h1">Docker leicht gemacht</Typography>
                </div>
                <div className="video-description bg-blue-400 m-2">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sed provident inventore ipsa sapiente quos, officiis molestias temporibus exercitationem ipsam.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus doloribus itaque, nihil reiciendis in ea culpa aliquid! Commodi, natus quam.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sed provident inventore ipsa sapiente quos, officiis molestias temporibus exercitationem ipsam.
                    </p>
                </div>
                <div className="main-content grid grid-rows-2 grid-flow-col">
                    <iframe
                        className="row-span-2 col-span-2"
                        width="700"
                        height="400"
                        src={`https://www.youtube.com/embed/rf8YebDBcbY`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                    <Typography className="bg-blue-400 row-span-2 col-span-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis quo mollitia, laboriosam nostrum fuga amet consequuntur? Ab, aspernatur eveniet!
                    </Typography>
                </div>
                {/* Story boards below  */}
                <hr></hr>
                <div>
                    <StoryBoardItem left={true}/>
                    <StoryBoardItem left={false}/>
                    <StoryBoardItem left={true}/>
                </div>
            </Container>
        </>
    )
}

export default VideoDetail