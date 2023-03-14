import {Divider, Typography} from '@mui/material'
import React from 'react'
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
          <div className="title-wrapper">
            <Fade right>
              <Typography variant="h1" className="title">
                We build bridges between companies and customers
              </Typography>
              <div className="point" />
            </Fade>
          </div>

          {/* Statistics section */}
          <div>
            <StatsCard />
          </div>

          <div>
            <Typography variant="h3">Meet the Team</Typography>
          </div>

          <Divider variant="middle" />

          <div className="flex justify-center text-center dark:bg-custom-dark-2">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-8 h-fit pt-20">
              <ProfileCard
                title="Sascha Zesty🏳‍🌈 Buthelezi"
                image="/image/sascha.jpg"
              />
              <ProfileCard
                title="💣liver Yngve Akbar Petterss💣n"
                image="/image/oliver.jpg"
              />
              <ProfileCard
                title="Davide Leandro Marcoli"
                image="/image/davide.jpg"
              />
              <ProfileCard title="Andrin Klarer" image="/image/andrin.png" />
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
