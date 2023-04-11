import {TextField} from '@mui/material'
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
                        Logo
                    </div>

                    <div className="columns">
                        <p className="column-header">Product</p>
                        <ul className="a-ref">
                            <li><a href="src/components/organisms/Footer">Overview</a></li>
                            <li><a href="src/components/organisms/Footer">Features</a></li>
                            <li><a href="src/components/organisms/Footer">Solutions</a></li>
                            <li><a href="src/components/organisms/Footer">Tutorials</a></li>
                            <li><a href="src/components/organisms/Footer">Pricing</a></li>
                            <li><a href="src/components/organisms/Footer">Releases</a></li>

                        </ul>
                    </div>

                    <div className="columns">
                        <p className="column-header">Company</p>
                        <ul className="a-ref">
                            <li><a href="src/components/organisms/Footer">About us</a></li>
                            <li><a href="src/components/organisms/Footer">Careers</a></li>
                            <li><a href="src/components/organisms/Footer">Press</a></li>
                            <li><a href="src/components/organisms/Footer">News</a></li>
                            <li><a href="src/components/organisms/Footer">Media kit</a></li>
                            <li><a href="src/components/organisms/Footer">Contact</a></li>
                        </ul>
                    </div>

                    <div className="columns">
                        <p className="column-header">Ressources</p>
                        <ul className="a-ref">
                            <li><a href="src/components/organisms/Footer">Blog</a></li>
                            <li><a href="src/components/organisms/Footer">Newsletter</a></li>
                            <li><a href="src/components/organisms/Footer">Events</a></li>
                            <li><a href="src/components/organisms/Footer">Help centre</a></li>
                            <li><a href="src/components/organisms/Footer">Tutorials</a></li>
                            <li><a href="src/components/organisms/Footer">Support</a></li>
                        </ul>
                    </div>

                    <div className="columns">
                        <p className="column-header">Social</p>
                        <ul className="a-ref">
                            <li><a href="src/components/organisms/Footer">Facebook</a></li>
                            <li><a href="src/components/organisms/Footer">Twitter</a></li>
                            <li><a href="src/components/organisms/Footer">LinkedIn</a></li>
                            <li><a href="src/components/organisms/Footer">Github</a></li>
                        </ul>
                    </div>

                    <div className="columns">
                        <p className="column-header">Legal</p>
                        <ul className="a-ref">
                            <li><a href="src/components/organisms/Footer">Terms</a></li>
                            <li><a href="src/components/organisms/Footer">Privacy</a></li>
                            <li><a href="src/components/organisms/Footer">Cookies</a></li>
                            <li><a href="src/components/organisms/Footer">Licenses</a></li>
                            <li><a href="src/components/organisms/Footer">Settings</a></li>
                            <li><a href="src/components/organisms/Footer">Contact</a></li>
                        </ul>
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
