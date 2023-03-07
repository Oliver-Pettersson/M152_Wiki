import { TextField, Typography } from '@mui/material'
import React from 'react'

// Inspiration: https://dribbble.com/shots/20082464-Footers-Untitled-UI
function Footer() {
    return (
        <>
            <div className="bg-pink-400">
                <div className="">
                    <Typography>Sign up to our newsletter</Typography>
                    <Typography>Stay up to date with the latest news, announcements, and articles.</Typography>

                    <TextField id="outlined-basic" label="Enter your email" variant="outlined"/>
                </div>

                <div className="">
                    <a>Overview</a>
                    <a>Features</a>
                    <a>Overview</a>
                    <a>Overview</a>
                    <a>Overview</a>
                    <a>Overview</a>
                </div>
            </div>
        </>
    )
}

export default Footer
