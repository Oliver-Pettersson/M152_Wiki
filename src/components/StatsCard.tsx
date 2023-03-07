import {Typography} from '@mui/material'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PsychologyIcon from '@mui/icons-material/Psychology';
import GroupIcon from '@mui/icons-material/Group';
import React from 'react'

function StatsCard(props: any) {
    return (
        <>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 h-fit pt-20">
                <div className="row-span-2 col-span-3 grid-cols-3 bg-blue-400">
                    <AttachMoneyIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sequi maiores debitis
                        odio ex a!</Typography>
                    <Typography>55K+</Typography>
                </div>
                <div className="row-span-2 col-span-3 grid-cols-3 bg-red-400">
                    <PsychologyIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sequi maiores debitis
                        odio ex a!</Typography>
                    <Typography>12K+</Typography>
                </div>
                <div className="row-span-2 col-span-3 grid-cols-3 bg-green-400">
                    <GroupIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sequi maiores debitis
                        odio ex a!</Typography>
                    <Typography>20K+</Typography>
                </div>
            </div>
        </>
    )
}

export default StatsCard
