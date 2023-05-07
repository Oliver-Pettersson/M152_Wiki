import React from "react";
import VideoCard from "../../molecules/VideoCard/VideoCard";

const VideoZone = () => {
    return (
        <>
            <div
                className={"grid gap-4 grid-cols-1 md:grid-cols-2"}
            >
                <VideoCard
                    img="https://www.youtube.com/embed/rf8YebDBcbY"
                    desc={"OKIDOKI"}
                />
                <VideoCard
                    img="https://www.youtube.com/embed/rf8YebDBcbY"
                    desc={"OKIDOKI"}
                />
                <VideoCard
                    img="https://www.youtube.com/embed/rf8YebDBcbY"
                    desc={"OKIDOKI"}
                />
                <VideoCard
                    img="https://www.youtube.com/embed/rf8YebDBcbY"
                    desc={"OKIDOKI"}
                />
            </div>
        </>
    );
};

export default VideoZone;
