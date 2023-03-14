import { useWindowWidth } from "@react-hook/window-size";
import React from "react";
import VideoCard from "../../molecules/VideoCard/VideoCard";

const VideoZone = () => {
  const width = useWindowWidth()
  return (
    <>
      <div className={width > 600 ? "grid gap-4 grid-cols-2" : "grid gap-4 grid-cols-1"}>
        <VideoCard
          img="https://www.youtube.com/embed/rf8YebDBcbY"
          desc="OKIDOKI"
        />
        <VideoCard
          img="https://www.youtube.com/embed/rf8YebDBcbY"
          desc="OKIDOKI"
        />
        <VideoCard
          img="https://www.youtube.com/embed/rf8YebDBcbY"
          desc="OKIDOKI"
        />
        <VideoCard
          img="https://www.youtube.com/embed/rf8YebDBcbY"
          desc="OKIDOKI"
        />
      </div>
    </>
  );
}

export default VideoZone
