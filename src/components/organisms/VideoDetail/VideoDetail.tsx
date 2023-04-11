import {Typography} from "@mui/material";
import Fade from 'react-reveal/Fade';
import React, {Suspense, lazy} from 'react'
import "./VideoDetail.css";
import StoryBoardItem from "../../molecules/StoryBoardItem/StoryBoardItem";
import AnimatedPage from "../../pages/AnimatedPage";
import {OrbitControls, Preload} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Model} from "../../../../public/model/3d_objects.tsx";

const LazyModel = React.lazy(() => import('../../../../public/model/3d_objects.tsx'));

function VideoDetail() {

    return (
        <AnimatedPage>
            <div className="page-container w-full">

                <div className="title-wrapper">
                    <Fade right>
                        <Typography variant="h1" className="title">Docker leicht gemacht</Typography>
                        <div className="point"/>
                    </Fade>
                </div>

                <div className="video-description">
                    <p className="video-description-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sed provident inventore ipsa
                        sapiente quos, officiis molestias temporibus exercitationem ipsam.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus doloribus itaque, nihil
                        reiciendis in ea culpa aliquid! Commodi, natus quam.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sed provident inventore ipsa
                        sapiente quos, officiis molestias temporibus exercitationem ipsam.
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
                    <Fade bottom>
                        <Typography className="video-thumbnail-description row-span-2 col-span-1">
                            In this weeks video we take a dive into the inner workings of Docker!
                        </Typography>
                    </Fade>
                </div>

                <div className="divider"></div>

                <Canvas frameloop="demand"
                        shadows
                        camera={{position: [30, 3, 5], fov: 25}}
                        gl={{preserveDrawingBuffer: true}}>
                    <Suspense fallback={null}>
                        <OrbitControls enableZoom={false} enablePan={true}/>
                        <Model/>
                    </Suspense>
                    <Preload all/>
                </Canvas>

                {/* Story boards below  */}
                <div className="storyboard-title-wrapper">
                    <Typography variant="h3">Story Board</Typography>
                </div>

                <div>
                    <StoryBoardItem isOnLeftSide={true}/>
                    <StoryBoardItem isOnLeftSide={false}/>
                    <StoryBoardItem isOnLeftSide={true}/>
                </div>

                <div className="divider"></div>
            </div>
        </AnimatedPage>
    )
}

export default VideoDetail