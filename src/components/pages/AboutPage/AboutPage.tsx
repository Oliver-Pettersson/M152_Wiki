import {Typography} from '@mui/material'
import React from 'react'
import './AboutPageStyle.css'
import ProfileCard from '../../molecules/ProfileCard/ProfileCard'
import StatsCard from '../../molecules/StatsCard/StatsCard'
import AnimatedPage from '../AnimatedPage'
import Fade from "react-reveal/Fade";

// Inspiration: https://dribbble.com/shots/18973465-Yoora-About-page
export default function AboutPage() {
    return (
        <AnimatedPage>
            <div className="page-container w-full">
                <div className="justify-center overflow-x-hidden">
                    <div className="title-wrapper pb-16">
                        <Fade right>
                            <Typography variant="h1" className="title">
                                Create time for advice
                            </Typography>
                            <div className="point"/>
                        </Fade>
                    </div>

                    {/* Statistics section */}
                    <div className="px-6 flex justify-center text-center bg-custom-dark-2 child">
                        <StatsCard/>
                    </div>

                    <div className="text-center pt-16 pb-16 ">
                        <Typography variant="h2">Meet the Team</Typography>
                    </div>

                    <div className="flex justify-center text-center">
                        <div className="grid lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-8 h-fit pt-12 pb-12">
                            <ProfileCard
                                title="Sascha Buthelezi"
                                image="/image/about/sascha.png"
                            />
                            <ProfileCard
                                title="Oliver Pettersson"
                                image="/image/about/oliver.jpg"
                            />
                            <ProfileCard
                                title="Davide Marcoli"
                                image="/image/about/davide.jpg"
                            />
                            <ProfileCard title="Andrin Klarer" image="/image/about/andrin.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
}
