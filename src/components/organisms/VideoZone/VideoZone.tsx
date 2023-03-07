import React from "react";
import VideoCard from "../../molecules/VideoCard/VideoCard";

export default function VideoZone() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <VideoCard
          img="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
          desc="OKIDOKI"
        />
        <VideoCard
          img="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
          desc="OKIDOKI"
        />
        <VideoCard
          img="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
          desc="OKIDOKI"
        />
        <VideoCard
          img="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
          desc="OKIDOKI"
        />
      </div>
    </>
  );
}
