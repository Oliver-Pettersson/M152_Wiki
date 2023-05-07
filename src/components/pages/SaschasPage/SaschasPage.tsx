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

                <div className="storyboard-title-wrapper">
                    <Typography variant="h3">Sources</Typography>
                    <br/>
                    <Typography variant="h5">
                        All the information from this video came from past experiences in an Uek I had.
                        <br/>
                        Additionally this <a href="https://www.ibm.com/cloud/blog/supervised-vs-unsupervised-learning#:~:text=Goals%3A%20In%20supervised%20learning%2C%20the,or%20interesting%20from%20the%20dataset.">IMB blog</a> was used for sources.
                    </Typography>
                </div>

                <br/>

                <div className="storyboard-title-wrapper">
                    <Typography variant="h3">Story Board</Typography>
                </div>

                <div className="storyboard-content">
                    <Typography variant="h3">Sketches</Typography>
                    <br/>
                    <Typography variant="h5">
                        Started of with searching for Video ideas. I was really interested in the AI Uek I had. 
                        Especially I wanted to tackle a more theoretical topic which I would need to explain, 
                        rather than demo. After two brainstorming sessions I decided to cover the topic of Machine 
                        learning. Specifically Supervised and Unsupervised Learning.
                    </Typography>
                    <br/>
                    <br/>
                </div>

                <img className="storyboard-content center" src={"/image/videos/ai/SS-1.png"} width="500" height="300" alt="Storyboard sketches" />

                <div className="divider"></div>

                <div className="storyboard-content">
                    <Typography variant="h5">
                        After coming up with a simple storyboard and sketch and writing it out clearer, I then had to search for some resources.
                        This included music, graphics and specifically what tool I would use to edit the video. It was important to make sure to use royalty free music and non-copyrighted elements.
                        <br/>
                        <br/>

                        <Typography variant="h3">Audio</Typography>
                        <br/>
                        I got my music from <a href="https://pixabay.com/users/comastudio-26079283/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=142819">ComaStudio</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=142819">Pixabay</a>. 
                        I added the attribution, cause I really liked the artits mix. The attribution wasn't mandatory but it just feels right giving them their praise. For the actual audio production I mainly used Soundtrap. Specifically for recording the voice over and tuning any sound quality issues that arose. I also manually edited the back-intrack song in my Video editor <strong>Filmora Wondershare</strong>.
                        I added a screenshot of my workflow below. I firstly had to find the correct effects to make up for my pretty bad mic. I found it best with the preset "clean" and then additionally adding the effects "Brighter" to about 50%. That brightens the voice pich and makes it sound cleaner. Afterwards I added the effect "3D" and made sure to set the mode to above. That gave the impression, I was personally talking to you the listener.
                        <br/>
                        <br/>
                    </Typography>
                </div>

                <img className="storyboard-content center" src={"/image/videos/ai/SS-2.png"} width="800" height="300" alt="Storyboard sketches" />

                <div className="divider"></div>

                <div className="storyboard-content">
                    <Typography variant="h3">Video</Typography>
                    <br/>
                    <Typography variant="h5">
                    As mentioned above I decided to use Filmora from Wondershare. I had prior to this absolutely zero experience with the tool and I can now confidently say,
                     I feel comfortable with it now. As for the editing process. I was lengthy. I added a lot of effects, animation and interesting moments which should capture 
                     the viewers interest and not lose their focus. I am quite proud with the outcome. The whole editing process tool roughly ~5 hours. 
                    </Typography>
                    <br/>
                    <br/>
                    
                    <img className="storyboard-content center" src={"/image/videos/ai/SS-4.png"} width="1100" height="500" alt="Storyboard sketches" />
                    <br/>
                    <br/>

                    <Typography variant="h5">
                    Other than that I also created custom Google slides backgorunds which a cool, urban feeling. I found a similar concept on Dribbble.com and though I should recreate it. I find it came out pretty cool and I am quite satisfied with the result. For the other elements in the video, I added them via Filmora.
                    </Typography>
                    <br/>
                    <br/>

                    <img className="storyboard-content center" src={"/image/videos/ai/SS-3.png"} width="1100" height="500" alt="Storyboard sketches" />
                    <br/>
                    

                </div>
                

                <div className="divider"></div>
            </div>
        </AnimatedPage>
    )
}

export default SaschasPage
