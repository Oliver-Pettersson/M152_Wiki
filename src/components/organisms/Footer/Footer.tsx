import {TextField, Typography} from '@mui/material'
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
                        <p className="call-to-action-title">Sign up to our newsletter</p>
                        <p className="call-to-action-text">Stay up to date with the latest news, announcements, and
                            articles.</p>
                    </div>

                    <div className="input row-span-1 col-span-3">
                        <TextField id="outlined-basic" label="Enter your email" variant="outlined"/>
                        <button className="submit-button">Submit</button>
                    </div>
                </div>

                <div className="links">
                    <div className="columns">
                        <Typography variant="h3">Legal</Typography>
                        <div>
                            <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
                                <img className="" alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" />
                            </a>
                            <br />
                            This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.
                        </div>
                    </div>

                </div>

                <div className="footer-divider"/>

                <div className="under-section grid grid-rows-1 grid-flow-col">
                    <div>
                        <p className="copyright-text row-span-1 col-span-2">© 2044 Untitled Company. All rights
                            reserved.</p>
                    </div>

                    <div className="icons row-span-1 col-span-2">
                        <FacebookIcon fontSize="large"/>
                        <TwitterIcon fontSize="large"/>
                        <LinkedInIcon fontSize="large"/>
                        <GitHubIcon fontSize="large"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
