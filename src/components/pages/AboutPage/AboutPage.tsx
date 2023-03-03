import { Divider, Typography } from '@mui/material'
import React from 'react'
import ProfileCard from '../../organism/ProfileCard'
import StatsCard from '../../StatsCard'

// Inspiration: https://dribbble.com/shots/18973465-Yoora-About-page
export default function AboutPage() {
  return (
    <>
      <div className='justify-center overflow-x-hidden'>

        {/* Header section */}
        <div className='page-header grid grid-rows-2 grid-flow-col bg-orange-400 m-6'>
          <Typography variant='h2' className='p-20 row-span-2 col-span-2 bg-green-400'>We build bridges between companies and customers</Typography>
          <Typography variant='subtitle2' gutterBottom className='row-span-2 col-span-1 align-bottom'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum consectetur aliquid dignissimos nobis officia corporis? Odit corporis soluta dolorem nisi.</Typography>
        </div>

        <Divider variant="middle"/>

        {/* Team image section */}
        <div>
          <img src="https://teamleader.fra1.cdn.digitaloceanspaces.com/corporate/production/header/_AUTOxAUTO_crop_center-center_80_none/team.jpg"/>
        </div>

        {/* Vision section */}
        <div className='page-header grid grid-rows-2 grid-flow-col bg-orange-400 m-6'>
          <Typography variant='h4' className='p-20 row-span-2 col-span-2 bg-green-400'>We build bridges between companies and customers</Typography>
          <Typography variant='h6' className='row-span-2 col-span-2 align-bottom'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum consectetur aliquid dignissimos nobis officia corporis? Odit corporis soluta dolorem nisi.</Typography>
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
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-8 h-fit pt-20">
          <ProfileCard name="Sashimi 🍣 Buthelezi" source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj24uILSWFA3nIy3T6Zjg-jG56FbbKn0NOEQ&usqp=CAU"/>
          <ProfileCard name="Oliver Yngve Akbar Pettersson" source="https://img.freepik.com/free-vector/round-black-bomb-realistic-style_52683-15190.jpg?w=2000"/>
          <ProfileCard name="David Leandro Marcoli" source="https://img.freepik.com/free-vector/sticker-template-with-pizza-isolated_1308-62307.jpg"/>
          <ProfileCard name="Noel Klarer" source="https://www.svp.ch/wp-content/uploads/SVP-UDC_rgb.jpg"/>
        </div>

        {/* Contact us section */}
        <div className="bg-yellow-400">

        </div>
      </div>
    </>
  )
}
