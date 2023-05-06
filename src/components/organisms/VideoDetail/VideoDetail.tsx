import React, {Suspense, useEffect, useState} from 'react'
import "./VideoDetail.css";
import AnimatedPage from "../../pages/AnimatedPage";
import {OrbitControls, Preload} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import DockerVideo from "./docker/DockerVideo";
import SEOPage from "./SEO/SEOPage";

const LazyModel = React.lazy(() => import('../../../../public/model/3d_objects.tsx'));

function VideoDetail() {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <AnimatedPage>
            <SEOPage/>
            <Canvas frameloop="demand"
                    shadows
                    camera={{position: [30, 3, 5], fov: 25}}
                    gl={{preserveDrawingBuffer: true}}>
                {!isMounted ? null : (
                    <Suspense fallback={null}>
                        <OrbitControls enableZoom={false} enablePan={true}/>
                        <LazyModel/>
                    </Suspense>)
                }
                <Preload all/>
            </Canvas>
        </AnimatedPage>
    )
}

export default VideoDetail