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
                    desc={"Supervised Learning VS Unsupervised Learning"}
                />
                <div>
                    <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
                        <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" />
                    </a>
                    <br />
                    This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.
                </div>
            </div>
        </>
    );
};

export default VideoZone;
