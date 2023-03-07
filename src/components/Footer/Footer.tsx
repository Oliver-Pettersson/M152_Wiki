import { TextField, Typography } from '@mui/material'
import React from 'react'
import "./Footer.css"

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Inspiration: https://dribbble.com/shots/20082464-Footers-Untitled-UI
function Footer() {
    return (
        <>
            <div className="footer-wrapper">
                <div className=" grid grid-rows-1 grid-flow-col">
                    <div className="row-span-1 col-span-2">
                        <Typography className="call-to-action-title">Sign up to our newsletter</Typography>
                        <Typography className="call-to-action-text">Stay up to date with the latest news, announcements, and articles.</Typography>
                    </div>

                    <div className="submit-button row-span-1 col-span-2">
                        <TextField id="outlined-basic" label="Enter your email" variant="outlined"/>
                    </div>
                </div>

                <div>
                    <div className="">
                        <a>Overview</a>
                        <a>Features</a>
                        <a>Overview</a>
                        <a>Overview</a>
                        <a>Overview</a>
                        <a>Overview</a>
                    </div>
                </div>

                <div className="footer-divider"/>

                <div className="under-section grid grid-rows-1 grid-flow-col">
                    <div>
                        <Typography className="copyright-text row-span-1 col-span-2">© 2044 Untitled Company. All rights reserved.</Typography>
                    </div>

                    <div className="icons row-span-1 col-span-2">
                        {/* Icons */}
                        <FacebookIcon/>
                        <TwitterIcon/>
                        <LinkedInIcon/>
                        <GitHubIcon/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
