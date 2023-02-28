import React from 'react';
import {Title} from "@mui/icons-material";
import {Typography} from "@mui/material";

export default function SoftwareLibraryPage() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <Typography variant='h4' className='underline'>Evaluation</Typography>
            <br/>

            <div className='w-full rounded-l-full rounded-r-full' style={{backgroundColor: '#EBB5B5'}}>
                <div className='flex flex-row'>
                    <div
                        className='bg-white dark:bg-custom-dark-1 h-96 w-96 z-10 flex flex-col items-center justify-center'>
                        <img style={{maxWidth: 'none', objectFit: 'fill'}}
                             className='mx-[2rem] h-80 w-80 rounded-3xl z-20'
                             src='https://source.unsplash.com/random/?Tree'/>
                    </div>
                    <div className='p-12 pr-64'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet finibus enim. In
                        hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse luctus lacus ac dui fringilla euismod. Proin euismod, justo id molestie
                        congue, ex leo accumsan est, vitae egestas felis nulla id ex. Donec porta tortor
                        suscipit purus consequat, ac cursus dolor luctus. Etiam interdum purus sed urna
                        venenatis tristique. Donec porta leo sem, in varius arcu efficitur ut. Maecenas vitae mi
                        a nulla vehicula dictum. Aliquam quis turpis eget nisi commodo faucibus. Ut volutpat
                        nunc vel porta interdum. Vestibulum metus massa, fermentum eu elementum id, congue non
                        ex. Sed ex odio, luctus ac vestibulum et, tempus iaculis arcu.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet finibus enim. In
                        hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse luctus lacus ac dui fringilla euismod. Proin euismod, justo id molestie
                        congue, ex leo accumsan est, vitae egestas felis nulla id ex. Donec porta tortor
                        suscipit purus consequat, ac cursus dolor luctus. Etiam interdum purus sed urna
                        venenatis tristique. Donec porta leo sem, in varius arcu efficitur ut. Maecenas vitae mi
                        a nulla vehicula dictum. Aliquam quis turpis eget nisi commodo faucibus. Ut volutpat
                        nunc vel porta interdum. Vestibulum metus massa, fermentum eu elementum id, congue non
                        ex. Sed ex odio, luctus ac vestibulum et, tempus iaculis arcu.
                    </div>
                </div>
            </div>

            <br/>

            <div className='w-full rounded-l-full rounded-r-full' style={{backgroundColor: '#EBB5B5'}}>
                <div className='flex flex-row'>
                    <div className='p-12 pl-64'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet finibus enim. In
                        hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse luctus lacus ac dui fringilla euismod. Proin euismod, justo id molestie
                        congue, ex leo accumsan est, vitae egestas felis nulla id ex. Donec porta tortor
                        suscipit purus consequat, ac cursus dolor luctus. Etiam interdum purus sed urna
                        venenatis tristique. Donec porta leo sem, in varius arcu efficitur ut. Maecenas vitae mi
                        a nulla vehicula dictum. Aliquam quis turpis eget nisi commodo faucibus. Ut volutpat
                        nunc vel porta interdum. Vestibulum metus massa, fermentum eu elementum id, congue non
                        ex. Sed ex odio, luctus ac vestibulum et, tempus iaculis arcu.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet finibus enim. In
                        hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse luctus lacus ac dui fringilla euismod. Proin euismod, justo id molestie
                        congue, ex leo accumsan est, vitae egestas felis nulla id ex. Donec porta tortor
                        suscipit purus consequat, ac cursus dolor luctus. Etiam interdum purus sed urna
                        venenatis tristique. Donec porta leo sem, in varius arcu efficitur ut. Maecenas vitae mi
                        a nulla vehicula dictum. Aliquam quis turpis eget nisi commodo faucibus. Ut volutpat
                        nunc vel porta interdum. Vestibulum metus massa, fermentum eu elementum id, congue non
                        ex. Sed ex odio, luctus ac vestibulum et, tempus iaculis arcu.
                    </div>
                    <div
                        className='bg-white dark:bg-custom-dark-1 h-96 w-96 z-10 flex flex-col items-center justify-center'>
                        <img style={{maxWidth: 'none', objectFit: 'fill'}}
                             className='mx-[2rem] h-80 w-80 rounded-3xl z-20'
                             src='https://source.unsplash.com/random/?Tree'/>
                    </div>
                </div>
            </div>
        </div>
    );
}