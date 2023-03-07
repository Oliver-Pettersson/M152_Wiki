import React from "react";
import {createStyles, makeStyles, useTheme} from "@mui/material";

interface SoftwareLibraryCardComponentProps {
    text: string;
    image: string;
    imageDirection: "left" | "right";
}

export default function SoftwareLibraryCardComponent({
                                                         text,
                                                         image,
                                                         imageDirection = "left"
                                                     }: SoftwareLibraryCardComponentProps) {

    const theme = useTheme();
    const darkmode = theme.palette.mode === "dark";

    let marginImage = "ml-[2rem]";
    let paddingText = "pl-64";
    let borderRadiusImageRadius = "rounded-bl-3xl";
    if (imageDirection === "right") {
        marginImage = "mr-[2rem]";
        paddingText = "pr-64";
        borderRadiusImageRadius = "rounded-br-3xl";
    } else if (imageDirection === "left") {
        marginImage = "ml-[2rem]";
        paddingText = "pl-64";
        borderRadiusImageRadius = "rounded-bl-3xl";
    }

    return (
        <div className='w-full rounded-l-full rounded-r-full' style={{background: darkmode ? "#788AA3" : "#9CD08F"}}>
            <div className='flex flex-row'>
                {imageDirection === 'left' ? <div className={`p-12 ${paddingText}`}>
                    {text}
                </div> : null}
                <div
                    className={`bg-white dark:bg-custom-dark-1 h-96 w-96 z-10 flex flex-col items-center ${borderRadiusImageRadius}`}>
                    <img style={{maxWidth: 'none', objectFit: 'fill'}}
                         className={`${marginImage} h-[22rem] w-80 rounded-3xl z-20`}
                         src={image}/>
                </div>
                {imageDirection === 'right' ? <div className={`p-12 ${paddingText}`}>
                    {text}
                </div> : null}
            </div>
        </div>
    );
}
