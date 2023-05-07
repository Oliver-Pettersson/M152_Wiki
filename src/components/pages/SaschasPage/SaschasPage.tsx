import React from 'react'
import {Typography} from "@mui/material"
import AnimatedPage from "../../pages/AnimatedPage"
import Fade from 'react-reveal/Fade';
import "./SaschasPage.css"

function SaschasPage() {
    return (
        <AnimatedPage>
            <div className="page-container w-full">

                <div className="title-wrapper">
                    <Fade right>
                        <Typography variant="h3" className="title">Crash course</Typography>
                        <Typography variant="h1" className="title">Supervised Learning VS Unsupervised Learning</Typography>
                        <div className="point"/>
                    </Fade>
                </div>

                <div className="video-description">
                    <Typography variant="h5" className="video-description-text">
                        Hi and welcome to this short crash course introduction to Machine Learning and AI. In this video I mainly focus on 
                        the two types of AI model learning. These being Supervised and Unsupervised Learning. The video encompasses ther 
                        definition, use cases and guidance on which to use at the end. I also mention some examples to better grasp the subject. 
                        Down below I have the entire creation process of this video and useful sources I used while making it. If interested feel 
                        free to read through and see the inner workings behind Code Bytez learn videos. Any how sit back and prepare your mind for information:
                    </Typography>
                </div>
                
                <div className="main-content">
                    <iframe
                        className="video-thumbnail"
                        src="https://www.youtube.com/embed/TcJ0xQpQTzg"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </div>

                <div className="divider"></div>

                {/* Story boards below  */}
                <div className="storyboard-title-wrapper">
                    <Typography variant="h3">Story Board</Typography>
                </div>

                <div className="storyboard-content">
                    <Typography variant="h5">
                        Started of with searching for Video ideas. I was really interested in the AI Uek I had. 
                        Especially I wanted to tackle a more theoretical topic which I would need to explain, 
                        rather than demo. After two brainstorming sessions I decided to cover the topic of Machine 
                        learning. Specifically Supervised and Unsupervised Learning.
                    </Typography>
                </div>

                <img src={"/image/videos/ai/SS-1.png"} width="500" height="300" alt="Storyboard sketches" />

                <div className="divider"></div>

                <div className="storyboard-content">
                    <Typography variant="h5">
                        Started of with searching for Video ideas. I was really interested in the AI Uek I had. 
                        Especially I wanted to tackle a more theoretical topic which I would need to explain, 
                        rather than demo. After two brainstorming sessions I decided to cover the topic of Machine 
                        learning. Specifically Supervised and Unsupervised Learning.
                    </Typography>
                </div>

                <div className="divider"></div>
            </div>
        </AnimatedPage>
    )
}

export default SaschasPage
