import Carousel from '../../organisms/Carousel/Carousel'
import VideoZone from '../../organisms/VideoZone/VideoZone'

import { Canvas, useFrame } from '@react-three/fiber'
import React, {Suspense, useEffect, useRef, useState} from "react";
import {OrbitControls, Preload} from "@react-three/drei";
import Model from "../../../../public/model/3d_objects";

function Box(props: any) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    // @ts-ignore
    useFrame((state, delta) => (ref.current.rotation.x += delta))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default function VideoPage() {

  return (
    <>
      <Carousel />
      <div className="bg-orange-400">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quibusdam doloribus optio repudiandae delectus nemo exercitationem natus, eum odit error?</p>
      </div>
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </Canvas>
        <Canvas frameloop="demand"
                shadows
                camera={{position: [20, 3, 5], fov: 25}}
                gl={{ preserveDrawingBuffer: true}}>
            <Suspense fallback={null}>
                <OrbitControls enableZoom={false}
                               maxPolarAngle={Math.PI / 2}
                               minPolarAngle={Math.PI / 2}/>
                <Model/>
            </Suspense>
            <Preload all />
        </Canvas>
      <VideoZone/>
    </>
  )
}
