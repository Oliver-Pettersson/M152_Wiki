import React from "react";
import VideoCard from "../../molecules/VideoCard/VideoCard";

const VideoZone = () => {
    return (
        <>
            <div
                className={"grid gap-4 grid-cols-1 md:grid-cols-2"}
            >
                <VideoCard
                    img="https://www.youtube.com/embed/KLP_Fk_aJYc"
                    desc={"SEO Optimization"}
                    path="/videos/seo"
                />
                <VideoCard
                    img="https://www.youtube.com/embed/eneyVL3VL48"
                    desc={"Docker leicht gemacht"}
                    path="/videos/docker"
                />
                <VideoCard
                    img="https://www.youtube.com/embed/rf8YebDBcbY"
                    desc={"OKIDOKI"}
                    path="/"
                />
                <VideoCard
                    img="https://www.youtube.com/embed/rf8YebDBcbY"
                    desc={"OKIDOKI"}
                    path="/"
                />
            </div>
        </>
    );
};

export default VideoZone;
