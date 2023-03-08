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
                        <p className="call-to-action-title">Sign up to our newsletter</p>
                        <p className="call-to-action-text">Stay up to date with the latest news, announcements, and articles.</p>
                    </div>

                    <div className="input row-span-1 col-span-3">
                        <TextField id="outlined-basic" label="Enter your email" variant="outlined"/>
                        <button className="submit-button">Submit</button>
                    </div>
                </div>

                <div className="links">
                    <div className="columns">
                        Logo
                    </div>

                    <div className="columns">
                        <p className="column-header">Product</p>
                        <ul className="a-ref">
                            <li><a href="">Overview</a></li>
                            <li><a href="">Features</a></li>
                            <li><a href="">Solutions</a></li>
                            <li><a href="">Tutorials</a></li>
                            <li><a href="">Pricing</a></li>
                            <li><a href="">Releases</a></li>
                            
                        </ul>
                    </div>

                    <div className="columns">
                        <p className="column-header">Company</p>
                        <ul className="a-ref">
                            <li><a href="">About us</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Press</a></li>
                            <li><a href="">News</a></li>
                            <li><a href="">Media kit</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>

                    <div className="columns">
                        <p className="column-header">Ressources</p>
                        <ul className="a-ref">
                            <li><a href="">Blog</a></li>
                            <li><a href="">Newsletter</a></li>
                            <li><a href="">Events</a></li>
                            <li><a href="">Help centre</a></li>
                            <li><a href="">Tutorials</a></li>
                            <li><a href="">Support</a></li>
                        </ul>
                    </div>

                    <div className="columns">
                        <p className="column-header">Social</p>
                        <ul className="a-ref">
                            <li><a href="">Facebook</a></li>
                            <li><a href="">Twitter</a></li>
                            <li><a href="">LinkedIn</a></li>
                            <li><a href="">Github</a></li>
                        </ul>
                    </div>

                    <div className="columns">
                        <p className="column-header">Legal</p>
                        <ul className="a-ref">
                            <li><a href="">Terms</a></li>
                            <li><a href="">Privacy</a></li>
                            <li><a href="">Cookies</a></li>
                            <li><a href="">Licenses</a></li>
                            <li><a href="">Settings</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>

                </div>

                <div className="footer-divider"/>

                <div className="under-section grid grid-rows-1 grid-flow-col">
                    <div>
                        <p className="copyright-text row-span-1 col-span-2">© 2044 Untitled Company. All rights reserved.</p>
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
