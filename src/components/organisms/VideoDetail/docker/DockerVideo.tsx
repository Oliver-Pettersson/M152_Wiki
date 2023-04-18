import {Typography} from "@mui/material";
import Fade from 'react-reveal/Fade';

import React from 'react'
import StoryBoardItem from "../../../molecules/StoryBoardItem/StoryBoardItem";
import "./DockerVideo.css";
import AnimatedPage from "../../../pages/AnimatedPage";

function DockerVideo() {

    const storyboardItems = [
        "Bowsprit jib keel loot weigh anchor gabion heave down brig six pounders lugsail. Gangway ahoy Spanish Main jib gaff fathom clipper sutler Blimey landlubber or just lubber. Port ballast boom Admiral of the Black tackle hang the jib sutler no prey, no pay execution dock loaded to the gunwalls. Driver Blimey pressgang squiffy man-of-war measured fer yer chains broadside carouser chase guns gangplank. Code of conduct bounty landlubber or just lubber bilge rat ho man-of-war league keelhaul run a rig skysail. Hornswaggle chase guns swing the lead Arr nipper trysail coxswain fire ship poop deck weigh anchor.",
        "Starboard marooned topmast hempen halter list loaded to the gunwalls schooner grapple log stern. Warp Privateer weigh anchor barque brig bilge water Shiver me timbers yo-ho-ho Yellow Jack handsomely. Piracy shrouds barque snow mizzen knave rutters galleon Plate Fleet fore. Belaying pin gaff swab grapple cutlass shrouds knave loot ballast spirits. Bring a spring upon her cable draft me wherry Davy Jones' Locker case shot snow jack smartly fathom. Man-of-war hogshead salmagundi Chain Shot trysail Privateer ahoy provost log lookout.",
        "Flogging squiffy scuttle broadside snow scallywag quarterdeck lee spanker ballast. Knave dead men tell no tales dance the hempen jig weigh anchor lanyard loot bilge water topgallant rope's end parley. Salmagundi lookout line schooner spirits jack prow deadlights hearties coffer. Deadlights measured fer yer chains boatswain splice the main brace hang the jib lee bowsprit hogshead interloper no prey, no pay. Driver gangplank jib hearties interloper no prey, no pay draught list measured fer yer chains avast. Bowsprit keel wherry sutler mizzen matey scurvy ye fire ship bucko.",
    ]

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

                {/* Story boards below  */}
                <div className="storyboard-title-wrapper">
                    <Typography variant="h3">Story Board</Typography>
                </div>

                <div>
                    {storyboardItems.map((value, index, array) => {
                        return (
                            <div className={"mb-8"}>
                                <StoryBoardItem isOnLeftSide={index % 2 == 0} text={value}
                                                imageSrc={"/image/videos/docker/storyboard" + (index + 1) + ".jpg"}/>
                            </div>
                        )
                    })}
                </div>

                <div className="divider"></div>
            </div>
        </AnimatedPage>
    )
}

export default DockerVideo