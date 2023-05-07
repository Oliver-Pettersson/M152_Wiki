import {Typography} from "@mui/material";
import Fade from 'react-reveal/Fade';

import React from 'react'
import StoryBoardItem from "../../../molecules/StoryBoardItem/StoryBoardItem";
import "./DockerVideo.css";
import AnimatedPage from "../../../pages/AnimatedPage";

function DockerVideo() {

    const storyboardItems = [
        "Hier wird der Zuschauer begrüßt und es wird ihm ein Überblick über das Video gegeben. Außerdem wird ihm erklärt, was Docker ist und was es kann. Es wird jedoch nicht zu sehr ins Detail gegangen, da dies den Rahmen der Einleitung sprengen würde.",
        "Bei diesem Punkt wird dem Zuschauer erklärt was Docker-Container sind und wie sie funktionieren. Es wird auch auf die Unterschiede zwischen Containern und VMs eingegangen. Außerdem wird dem Zuschauer erklärt, wie Docker-Container aufgebaut sind und wie sie funktionieren. Ebenfalls wird darauf eingegangen, wie lightweight Docker-Container sind.",
        "Hier wird dem Zuschauer die Isolation der Docker-Container erklärt. Es wird gesagt, dass sie losgelöst von der zugrundeliegenden Infrastruktur sind und dass sie nur die Ressourcen nutzen, die sie benötigen. Außerdem wird dem Zuschauer erklärt, dass Docker-Container nicht nur auf einem System laufen können, sondern auch auf mehreren Systemen.",
        "In diesem Abschnitt wird erklärt, auf welche Arten Docker gebraucht werden kann. Entweder lokal oder über den Docker Playground. Die Benutzung vom Docker Playground wird dabei Schritt für Schritt erklärt.",
        "Hier wird auf den wichtigsten Befehl in Docker eingegangen: 'docker run' und was er bewirkt. Außerdem wird der Command dem Zuschauer anhand des hello-world Containers erklärt. Auch das Pullen von Images wird hier erwähnt.",
        "Dies ist der Schluss des Videos. Hier wird dem Zuschauer nochmal ein Überblick über das Video gegeben und es wird ihm erklärt, dass er nun in der Lage ist, Docker zu benutzen. Außerdem werden ihm noch viele weitere Ressourcen gegeben, die ihm helfen können, Docker zu lernen.",
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
                        Docker ist eine plattformunabhängige und open-source Container-Plattform, die es ermöglicht, Anwendungen in Containern zu isolieren und auszuführen. Container sind eine Art von Virtualisierung, aber im Gegensatz zu traditionellen VMs sind sie viel leichtgewichtiger und portabler. Docker bietet Entwicklern und IT-Profis die Möglichkeit, Anwendungen schnell und effizient bereitzustellen, zu skalieren und zu verwalten, indem es die Anwendungen von der zugrunde liegenden Infrastruktur trennt. Durch die Verwendung von Docker-Containern können Entwickler und IT-Profis Anwendungen schneller entwickeln, testen und bereitstellen und gleichzeitig die Komplexität der Infrastruktur reduzieren.
                    </p>
                </div>

                <div className="main-content grid grid-rows-2 grid-flow-col">
                    {/*<iframe*/}
                    {/*    className="video-thumbnail row-span-2 col-span-2"*/}
                    {/*    src={`https://www.youtube.com/embed/rf8YebDBcbY`}*/}
                    {/*    frameBorder="0"*/}
                    {/*    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
                    {/*    allowFullScreen*/}
                    {/*    title="Embedded youtube"*/}
                    {/*/>*/}
                    <iframe src="https://www.youtube.com/embed/eneyVL3VL48"
                            className="video-thumbnail row-span-2 col-span-2"
                            title="Einführung in Docker" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    <Fade bottom>
                        <Typography className="video-thumbnail-description row-span-2 col-span-1">
                            Willkommen zu diesem Einführungsvideo über Docker! In diesem Video werden wir die Grundlagen von Docker erläutern und Ihnen eine Einführung in diese äußerst leistungsfähige Container-Plattform geben.

                            Docker ist eine Anwendung, die es Ihnen ermöglicht, Anwendungen in Containern zu isolieren und auszuführen. Container sind wie virtuelle Maschinen, aber sie sind viel leichter und schneller als traditionelle VMs. Docker ermöglicht es Entwicklern und IT-Profis, Anwendungen schnell bereitzustellen, zu skalieren und zu verwalten, ohne sich Gedanken über die zugrunde liegende Infrastruktur machen zu müssen.
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