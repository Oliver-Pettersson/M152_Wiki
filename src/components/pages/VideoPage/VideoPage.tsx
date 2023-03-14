import Carousel from '../../organisms/Carousel/Carousel';
import VideoZone from '../../organisms/VideoZone/VideoZone';

import { useFrame } from '@react-three/fiber';
import { useRef, useState } from "react";


export default function VideoPage() {

  return (
    <>
      <Carousel />
      <VideoZone/>
    </>
  )
}
