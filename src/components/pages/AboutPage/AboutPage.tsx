import {Divider, Typography} from '@mui/material'
import React from 'react'
import Footer from '../../Footer'
import ProfileCard from '../../organisms/ProfileCard/ProfileCard'
import StatsCard from '../../StatsCard'

// Inspiration: https://dribbble.com/shots/18973465-Yoora-About-page
export default function AboutPage() {
    return (
        <>
            <div className='justify-center overflow-x-hidden'>

                {/* Header section */}
                <div className='page-header grid grid-rows-2 grid-flow-col bg-orange-400 m-6'>
                    <Typography variant='h2' className='p-20 row-span-2 col-span-2 bg-green-400'>We build bridges
                        between companies and customers</Typography>
                    <Typography variant='subtitle2' gutterBottom className='row-span-2 col-span-1 align-bottom'>Lorem
                        ipsum dolor sit amet consectetur, adipisicing elit. Rerum consectetur aliquid dignissimos nobis
                        officia corporis? Odit corporis soluta dolorem nisi.</Typography>
                </div>

                <Divider variant="middle"/>

                {/* Team image section */}
                <div>
                    <img
                        src="https://teamleader.fra1.cdn.digitaloceanspaces.com/corporate/production/header/_AUTOxAUTO_crop_center-center_80_none/team.jpg"/>
                </div>

                {/* Vision section */}
                <div className='page-header grid grid-rows-2 grid-flow-col bg-orange-400 m-6'>
                    <Typography variant='h4' className='p-20 row-span-2 col-span-2 bg-green-400'>We build bridges
                        between companies and customers</Typography>
                    <Typography variant='h6' className='row-span-2 col-span-2 align-bottom'>Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Rerum consectetur aliquid dignissimos nobis officia corporis?
                        Odit corporis soluta dolorem nisi.</Typography>
                </div>

                {/* Statistics section */}
                <div>
                    <StatsCard/>
                </div>

                <div>
                    <Typography variant="h3">Meet the Team</Typography>
                </div>

                <Divider variant="middle"/>

                {/* Team section */}
                {/* <div className="grid lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-8 h-fit pt-20">
          <ProfileCard title="Sascha Zize Buthelezi" image=""/>
          <ProfileCard title="💣liver Yngve Akbar Petterss💣n" image=""/>
          <ProfileCard title="Davide Leandro Marcoli" image=""/>
          <ProfileCard title="Andrin Klarer" image=""/>
        </div> */}

                <div className='flex justify-center text-center dark:bg-custom-dark-2 bg-gray-100'>
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-8 h-fit pt-20">
                        <ProfileCard title="Sascha Zize Buthelezi" image="/image/sascha.jpg"/>
                        <ProfileCard title="💣liver Yngve Akbar Petterss💣n" image="/image/oliver.jpg"/>
                        <ProfileCard title="Davide Leandro Marcoli" image="/image/davide.jpg"/>
                        <ProfileCard title="Andrin Klarer" image="/image/andrin.png"/>
                    </div>
                </div>
                {/* Contact us section */}
                <div className="bg-yellow-400">
                </div>

                <Footer/>
            </div>
        </>
    )
}
